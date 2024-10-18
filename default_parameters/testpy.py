def test(value, myList=[]):
    myList.append(value)
    return myList

if __name__ == '__main__':
    print(test(1)) // [1]
    print(test(2)) // [1, 2]
    print(test(3)) // [1, 2, 3]