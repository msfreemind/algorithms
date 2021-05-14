def quick_sort (array)
  return array if array.length <= 1

  pivot_idx = rand(0...array.length)
  pivot = [array[pivot_idx]]
  left_side = Array.new
  right_side = Array.new

  array.each_with_index do |el, i|
    if i != pivot_idx
      if el < pivot.first 
        left_side.push(el) 
      else 
        right_side.push(el) 
      end
    end
  end

  quick_sort(left_side) + pivot + quick_sort(right_side)
end

p quick_sort((1..10000).to_a.shuffle)