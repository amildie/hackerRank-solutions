-- https://www.hackerrank.com/challenges/reduced-string

s = io.read("*l")

function removeIndex(s, i)
    return s:sub(1, i-1) .. s:sub(i+1)
end

function isOptimized(s)
    for i = 1, #s do
        if s:sub(i,i) == s:sub(i+1,i+1) then
            return false
        end
    end
    return true
end

function fixOne(s)
    r = s
    for i = 1, #s do
        if s:sub(i,i) == s:sub(i+1,i+1) then
            return removeIndex(removeIndex(r, i+1), i)
        end
    end
end

while isOptimized(s) == false do
    s = fixOne(s)
end 

if s == '' then print("Empty String") else print(s) end