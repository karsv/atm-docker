package com.example.atm.service.impl;

import com.example.atm.dto.AccountRequestDto;
import com.example.atm.dto.PersonRequestDto;
import com.example.atm.exception.AccountException;
import com.example.atm.exception.AtmException;
import com.example.atm.model.Account;
import com.example.atm.repository.AccountRepository;
import com.example.atm.repository.PersonRepository;
import com.example.atm.service.AccountService;
import java.math.BigDecimal;
import java.util.Set;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {
    private final AccountRepository accountRepository;
    private final PersonRepository personRepository;

    public AccountServiceImpl(AccountRepository accountRepository,
                              PersonRepository personRepository) {
        this.accountRepository = accountRepository;
        this.personRepository = personRepository;
    }

    @Override
    public Account addAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Account getAccount(AccountRequestDto account) {
        if (accountRepository.findById(account.getId()).isPresent()) {
            return accountRepository.findById(account.getId()).get();
        } else {
            throw new AccountException("There isn't such account!");
        }
    }

    @Override
    public Set<Account> getPersonAccounts(PersonRequestDto personRequestDto) {
        if (personRepository.findById(personRequestDto.getId()).isPresent()) {
            return personRepository.findById(personRequestDto.getId()).get().getAccounts();
        } else {
            throw new AccountException("Such user doesn't have accounts!");
        }
    }

    @Override
    public Account putMoneyOnAccount(AccountRequestDto accountRequestDto, BigDecimal money) {
        Account account = getAccount(accountRequestDto);
        account.setMoneySum(account.getMoneySum().add(money));
        return accountRepository.save(account);
    }

    @Override
    public Account getMoneyFromAccount(AccountRequestDto accountRequestDto, BigDecimal money) {
        Account account = getAccount(accountRequestDto);
        checkMoneyOnAccount(account, money);
        account.setMoneySum(account.getMoneySum().subtract(money));
        return accountRepository.save(account);
    }

    @Override
    public Account transferMoney(BigDecimal money, AccountRequestDto ownerAccountDto,
                                 AccountRequestDto destinationAccountDto) {
        Account ownerAccount = getAccount(ownerAccountDto);
        Account destinationAccount = getAccount(destinationAccountDto);

        checkMoneyOnAccount(ownerAccount, money);

        try {
            ownerAccount = getMoneyFromAccount(ownerAccountDto, money);
            putMoneyOnAccount(destinationAccountDto, money);
        } catch (Exception e) {
            addAccount(ownerAccount);
            addAccount(destinationAccount);
            throw new AtmException("Can't transfer money!", e);
        }
        return ownerAccount;
    }

    private boolean checkMoneyOnAccount(Account account, BigDecimal money) {
        if (money.compareTo(account.getMoneySum()) >= 0) {
            throw new AccountException("Not enough money on account!");
        }
        return true;
    }
}
