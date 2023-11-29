function findPrimes(n) {
    primes = []
    for (num in range(2, n + 1))
        isPrime = True
        for i in range(2, int(num**0.5) + 1)
            if num % i == 0
                isPrime = False
                break
        if isPrime
            primes.append(num)
    return primes
}

n = 100
primes = findPrimes(n)
print(primes)
