def find_missing_number(arr1, arr2)
  num = 0

  (0...arr1.length).each { |i| num = num ^ arr1[i] }
  (0...arr2.length).each { |i| num = num ^ arr2[i] }

  num
end

def my_min(arr)
  smallest = arr[0]
  arr.each { |num| smallest = num if num < smallest }
  smallest
end

def largest_contiguous_subsum(arr)
  max = arr.first
  curr_sum = 0

  arr.each do |num|
    max = num + curr_sum if num + curr_sum > max

    if num + curr_sum > 0
      curr_sum += num  
    elsif num > 0 || num > max
      curr_sum = num
    else
      curr_sum = 0
    end
  end

  max
end

def is_shuffle?(str1, str2, str3)
  return true if str3.length == 1 && ((str1 == str3 && str2.empty? ) || (str2 == str3 && str1.empty?))
    
  if str1[0] == str3[0] || str2[0] == str3[0]
    return  is_shuffle?(str1[1..-1], str2, str3[1..-1]) || is_shuffle?(str1, str2[1..-1], str3[1..-1])
  else
    return false
  end
end