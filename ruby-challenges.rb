# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# --> PSEUDO CODE <--
# --> DEF method called "evenOddFinder" 
# --> Method takes in paramater called "number"
# --> if "number" % 2 == 0 = even Otherwise odd

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def evenOddFinder number
    if number %2 == 0 
     "#{number} is even"
    elsif number %2 == 1
        "#{number} is odd"
    end 
end 

p evenOddFinder (num1)
p evenOddFinder (num2)
p evenOddFinder (num3)

# --> OUTPUT <--
# "7 is odd"
# "42 is even"
# "221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# --> PSEUDO CODE <--
# Create method called vowel_snatcher - takes in "string"
# use .delete to remove particular string letters

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_snatcher (string)
    string.delete('aeiouAEIOU')
end 
p vowel_snatcher(album1)
p vowel_snatcher(album2)
p vowel_snatcher(album3)

# --> OUTPUT <--
# "Rbbr Sl"
# "Sgt Pppr"
# "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# --> PSEUDO CODE <--
# Create method called "palindrome_seeker" - takes in "string"
# use .reverse to see if "string" is == to itself in reverse

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_seeker (string)
    if string == string.reverse.capitalize 
        "#{string} is a palindrome."
    else
         "#{string} is not a palindrome."
    end
end

p palindrome_seeker (palindrome_tester1)
p palindrome_seeker (palindrome_tester2)
p palindrome_seeker (palindrome_tester3)

# --> OUTPUT <--
# "Racecar is a palindrome."
# "LEARN is not a palindrome."
# "Rotator is a palindrome."