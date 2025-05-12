# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons of pancakes? What is it in terms of the number of flips?
Add your answer to this markdown file.

Runtime (flips to sort):

Iterate over each pancake position (excluding last): $\Theta$(n)
For each position, find max in subarray [0..i]: $\Theta$(i)
Perform up to 2 flips: $\Theta$(1) each
Total work to find max over all positions: $\Theta$ (1 + 2 + ... + (n-1)) = $\Theta(n^2$)
Total flips: 2 flips per iteration $\times$ (n - 1) = $\Theta$(n)

For each position, i, you perform 1 flip to bring the max to the front if needed, and 1 flip to bring it to its final position. This results in at most 2 flips per iteration for n-1 iterations, giving us the Flips runtime of 2(n-1) $\epsilon \Theta$(n), thus $\Theta$(n).

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

For this assignment, I asked Chat GPT for help improving my reasoning, mostly regarding its presentation and articulation. I also used the website (upyesp)[https://www.upyesp.org/posts/makrdown-vscode-math-notation/] as a quick guide for adding mathematical expressions.
