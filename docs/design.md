# Дизайн программных компонентов

### Интерфейс обёртки API Гита
```
TestDB:
    connect()

    setCachingEnable(isEnabled: bool)        // Doesn't clear the cache
    queryAndCacheAll()
    clearCache()

    // Request all matching tests
    queryByID(id: int) -> query
    queryByTags(tags: [])
    queryByDate(rule: enum, anchor: date)
    queryByContent(content: str)

    queryAvailableIDs() -> [int]
    queryAvailableTags() -> [str]

Query:
    succeded: bool
    error: Error
    matches: [Test]
```
