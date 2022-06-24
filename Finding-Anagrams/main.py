# Check if a word is an anagrams 
# Example:
# find_anagrams("hello") --> False
# find_anagrams("racecar") --> True


def find_anagrams(word):
    """
    >>> find_anagrams("racecar")
    True
    >>> find_anagrams("Expression")
    False
    """
    # [assignment] Add your code here
    d = word
    e =  list(d)
    e.reverse()
    e = "".join(e)
    if d == e:
        return True
    else:
        return False



find_anagrams("Hello")
find_anagrams("racecar")