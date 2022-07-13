# LeetCode Solutions

| Date             | LeetCode Problem | GitHub Gist | Data Structure / Pattern | Difficulty | Notes
|------------------|------------------| -------------------------|------------|------------|------|
|7-13-2022        | [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)    | [GitHub Gists](https://gist.github.com/coollikeabreeze/b4a3d51dce3ca05b4bfa6548b1a86837s) | 2D Array / Array / Grid / Binary Search | Medium | TIP: Given 2D array matrix, you can find the row & col from the INDEX (as if it were a single array) of a particular element: row = index / numElements & col = index % numElementss
|7-12-2022        |[366. Find Leaves of Binary Trees](https://leetcode.com/problems/find-leaves-of-binary-tree/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/06e34681c6451d072d9f49b1010cc896) | Binary Tree / DFS | Medium | REVIEW THIS
|6-30-2022        | [463. Island Perimeter](https://leetcode.com/problems/island-perimeter/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/957445e2499bae84db947a109de212a3) | Graph / BFS / DFS | Easy | Simple DFS; trick is to substract one from the possible 4 perimeter units each time you find an node adjacent (TRBL) to the current node |ss
|6-29-2022        | [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)  | [GitHub Gist](https://gist.github.com/coollikeabreeze/518f57ab5e83c12bd751c1088e4a00cd) | Backtracking / String | Medium | PRACTICE THIS PATTERN |
|6-29-2022        | [46. Permutations](https://leetcode.com/problems/permutations/)    | [GitHub Gist](https://gist.github.com/coollikeabreeze/913ab9c213ec3f3d92b4d81a521b0e9c) | Backtracking / Array | Medium | PRACTICE THIS PATTERN |
|6-27-2022        | [257. Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/9b2e32e495a5779cdf68c34cd7960b45) | Binary Tree | Easy | Remember: Base case is when there are no left/right or children nodes; For Tenary / N-ary tree, deal with children rather than left/right |
|6-24-2022        | [628. Maximum Product of Three Numbers](https://leetcode.com/problems/maximum-product-of-three-numbers/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/b99c4bf68e4b5ec3d259255c67564568) | Array / Math | Easy | Remember: Number.MIN_VALUE represents the smallest *positive* number
|6-23-2022        | [701. Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/c3613a4cd2686f7e8d256e1d90910984) | Binary Search Tree | Medium | Remember: recursively add the new node the left subtree if val is less than the current, otherwise add to the right |
|
|6-23-2022        |[200. Number of Islands](https://leetcode.com/problems/number-of-islands/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/c8335f7c82a72b8cdd790e88b1e50e52) | Graph / BFS | Medium | 1. Loop through the grid (nested loop); 2. Use queue/BFS to evaluate the valid adjacent vertices of any "island" & add to count when all valid island vertices have been seen; 3. Loop with continue the process with any unconnected islands.
|6-22-2022        |[34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/51b76ca59cb50389bc7c2436fe0ecc1c) | Binary Search | Medium | Use a helper function and "TRUE/FALSE" parameter (isFirst) to clean up the code for the 2-pass binary search |
| 6-22-2022       | [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/428d418700085b99ce5f881198555977) | Sorting / Quicksort / Hoare's Quickselect | Medium | REVIEW THIS |
| 6-20-2022 | [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/2a0323c96aba423ac9266efc9b2571d8) | Tree / DFS | Medium | REVIEW THIS |
|6-16-2022        |[297. Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)     | [GitHub Gist](https://gist.github.com/coollikeabreeze/866cfdf148c542ef142e6a019043ec0b)    | Binary Tree / DFS | Hard | Remember the procedure for CREATING a binary tree based on a type of traversal
| 6-15-2022       |[110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)  | [GitHub Gist](https://gist.github.com/coollikeabreeze/502854bf70ca819f8875848aa2b1b128) | Binary Tree | Easy | REVIEW - comparing depths of subtrees |
|6-14-2022        |[1011. Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/2f3781af636bee15a2b57eb717ada4d0) | Array / Binary Search | Medium | REMEMBER: Binary Search - find the BOUNDARY pattern |
| 6-14-2022       | [744. Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/9b15aa73c6d6c5de0a4da92d30a3fdae) | Array / Binary Search | Easy | Binary Search |
| 6-14-2022       | [169. Majority Element](https://leetcode.com/problems/majority-element/)  | [GitHub Gist](https://gist.github.com/coollikeabreeze/af0c9c179a956caf64eebcd2be903951) | Array / Hashtable / Divide and Conquer | Easy | REVIEW: Boyer-Moore Algorithm; Easy approach uses hashtable |
|6-10-2022        | [160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)  | [GitHub Gist](https://gist.github.com/coollikeabreeze/53129b251ed4dff33038a6b8f011b7dd)  | Linked List | Easy (with Medium solution) | like fast / slow pointers, you can traverse the list up to twice to find intersection by restarting one list's pointer when it reaches null, then returning one of the pointer vals when the pointers are equal (if no intersection, both will equal null) |
|6-7-2022         | [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)  | []() | Binary Tree | Medium | Remember the IMPORTANT FACTS to solve this: 1. 1st element in pre-order array is root node and 2.
| 6-7-2022        | [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/529ad40a7039d8ec6fd2de56f066fea8) | Binary Search Tree / In-Order Traversal | Medium | Review the Iterative Solution |
|6-7-2022         | [572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)  | [GitHub Gist](https://gist.github.com/coollikeabreeze/2c1cd012fc653652b855cf7244edeeaf) | Binary Tree / DFS | Easy | Combine traversal and "same tree" pattern |
|6-7-2022         | [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/0a56e1f954fd6508ab095d86752d1215) | Binary Tree / DFS | Easy | REMEMBER: The LCA in a BST is the node at which the value of one target node is less than and the other greater than the ancestor value.
|6-4-2022         | [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/c328272a8886ea3c6c4103386d06513b) | Binary Tree / DFS / BFS | Medium | TIP: create OR push into each level subarray; REVIEW: keeping track of tree level |
|6-4-2022         |[238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/b91a25522f65730b8f5294d694e09882) | Array | Medium | BIG-O TIP: Iterating through an array twice (non-nested) DOES NOT MATTER; still O(n) time
|6-4-2022         | [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/da478371001288bc1dcb82ee36c81bf4) | Binary Search Tree | Medium | REMEMBER: choosing DFS method is important - this can rely on IN-ORDER TRAVERSAL
|6-3-2022         | [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/3e5f3506d6be4f66231842805bd92a36) | Linked List | Easy | Since it's sorted, no need to store duplicate values (dupes will be directly next to each other) |
|6-2-2022         | [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)  | [GitHub Gist](https://gist.github.com/coollikeabreeze/3fab965b0aa8163a45bf850b136428f3) | Linked List / Two-Pointers | Easy | Floyd's Tortoise and Hare |
|6-2-2022        | [66.Plus One](https://leetcode.com/problems/plus-one/) |[GitHub Gist](https://gist.github.com/coollikeabreeze/1ee17229cc8c592bd34a6d383aa85a66) | Array | Easy | Remember to keep edge cases in mind, e.g. [9,9,9] or [8,9,8]
|6-2-2022        | [28. Implement strStr()](https://leetcode.com/problems/implement-strstr/) |[GitHub Gist](https://gist.github.com/coollikeabreeze/bd3ae86c1dbb06ceb6809f0c728c3756) | String / Two-Pointers | Easy | Carefully consider how to break out of a loop and/or properly return a result ONLY IF the loop completes successfully
|6-1-2022        | [746. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/submissions/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/b0f03fb41cf939a172317e2988a23429) | Dynamic Programming / Array | Easy | Update existing array (similar to maximum subarray); change the logic as needed |
|6-1-2022       | [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/4d24f89db236abd5d7bdd7b7e3adb027) | Dynamic Programming | Easy | Look for the pattern between steps to make the appropriate calculations |
| 6-1-2022      | [867. Transpose Matrix](https://leetcode.com/problems/transpose-matrix/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/2d6e174ee3442cb0071005230bfec07c) | Array / Matrix / Simulation | Easy | Construct the matrix in the opposite direction (rows <--> columns) |
|6-1-2022       | [1448. Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/9151a68ddfff7102357c05d5e27e26e6) |Binary Tree / Recursion / Depth-First Search | Medium | REVIEW THIS SOLUTION |
| 6-1-2022      |[226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/7c617b7b9323239af6afe582a2c20463) | Binary Tree | Easy | REVIEW THIS SOLUTION; particularly DFS |
| 6-1-2022      | [1249. Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/c4c9a830c4d265756eeb856fd854df8b) | String / Stack | Medium | Use stack and convert to array; replace un-needed elements with empty string |
| 6-1-2022 | [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/5e0f09a840397287806e8bf38b228a06) | Array / Dynamic Programming | Medium | REVIEW THIS ALGORITHM |
|6-1-2022       | [678. Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/3fb2456d0c4cc79ace6b8c7317ec342f) | String / Greedy | Medium | REVIEW: Greedy algorithm - keeps track of min and max left parens |
|5-31-2022      | [430. Flatten a Multilevel Doubly Linked List](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/0634de6bd62be98d5297e8a3d6ba0eed) | Doubly-Linked List | Medium | REMEMBER: consider the order the nodes will be evaluated AFTER merging children
|5-31-2022      | [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/solution/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/759a1c41889139b2e943755210ce341b) | String | Easy | REMEMBER: Consider all edge cases (e.g. ending spaces)
|5-27-2022        | [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/79e24071afd5b502074188ba0fd22408) | Array / Sliding Windows | Medium | REMEMBER one-pass approach! Just like first problem // Review: Sliding Windows - Peak and Valley Approach |
|5-27-2022        | [159. Longest Substring with At Most Two Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/54c63844f3a8b32142e0365dc734e293) | Array / Sliding Windows | Medium | Classic sliding windows BUT remember the pattern for updating the hashmap for "max 'k' distinct characters |
| 5-26-2022       | [69. Sqrt(x)](https://leetcode.com/problems/sqrtx/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/a009478e3de5dab5e261c8dee8efbaa8) | Binary Search | Easy | Tip: You can iterate over a series of numbers without an array |
|5-26-2022        | [852. Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/47ef273039a8afb67e1ece7cccc177c1) | Array / Binary Search | Easy | REMEMBER: Binary Search Pattern |
|5-26-2022        | [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/f006717b3dff639275565600897ec8dd) | Linked List | Medium | REVIEW THIS; there are 4 necessary pointers |
|5-26-2022        | [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/8b2e038f5c7169fdce21b6cf203b9f39) | Linked List / Recursion | Easy | Remember to store the appropriate pointers to keep references on reassignment
|5-26-2022  | [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/cb85b25f9be7a8aa1127b892f928fdd7) | Array / Dynamic Programming | Easy | Dynamic Programming: [Kadane's Algorithm](https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm) |
|5-25-2022      | [680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/db8bfe2bb06fbe7ce1079fce59d72de7) | String / Two-Pointers | Easy |  Two-Pointers: start evaluating palindrome. If mismatch, use helper to compare the remaining substrings using current pointer values
|5-25-2022      | [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/2c61833b5eac65f62315b64dfd7cf9a1) | String / Two-Pointers | Easy | Two-Pointers options: 1. Start from ends; 2. Start from middle; 3. Create reverse copy of string
|5-25-2022   | [27. Remove Element](https://leetcode.com/problems/remove-element/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/b233a5527f6282aeb661a37931658a12) | Array / Two-Pointers | Easy | Fast/Slow pointers: Slow pointer only moves when fast pointer encounters a number that is not the val (in this case, the val at p1 is replaced by val at p2)
|5-24-2022          | [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/d2267dd877ab723d9ab760e977e74574) | String / Sliding Windows | Medium | Sliding Windows: Keep track of left bound, hashmap (character + index) and max. Loop over array (right pointer): If seen character before, move left bound to this hashmap value + 1; regardless, add current character/index to hashmap and update the max (max between current or p2-p1+1)
|5-24-2022          | [844. Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/31b3de71d2ebf9892b9f8d2a9d014a62) | String / Two-Pointers | Easy | Two-Pointers: start at end of each string; if the values at any pointer is "#", figure out how many spaces to back (keep track of hashes * 2); Otherwise, compare letter characters and return false if they don't match.
|5-24-2022          | [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/5f99818f3d72ad2efe50a6f1a8644d12) | Array / Two-Pointers | Hard | Two pointers at start/end; evaluate the side with the lesser value; add the difference between the max height on that side and the current value to the total water calculation; increment
|5-20-2022          | [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/4672d7068915263bfbe9fae19a792753) | Array / Two-Pointers | Medium | Two pointers (start/end) and a maxArea variable; replace maxArea if current area is larger; increment the pointer at the lesser value |
|5-20-2022          |[547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/048bfe1927ade6caa258edb747d79669) | Graph / BFS | Medium | NOT like number of islands; each array represents a city and each nested array element represents the connection to the other cities, BFS + visited array to count any cities you have NOT already seen |
|5-19-2022          |[1. Two Sum](https://leetcode.com/problems/two-sum/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/47b69932f018d871417dd4439fa64954) | Array / Two-Pointer / HashMap | Easy | Hashmap Implementation to store the difference needed |
| 5-19-2022         |[121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/23aa158868bd07759ec58de90f1a9284)| Array / Dynamic Programming | Easy | Track max difference and minimum input
|5-18-2022          | [1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree](https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/6afa6e46594b8c0baf6dd1134d004fa0) | Binary Tree / DFS | Easy | Recursively reassign left <--> right
| 5-18-2022         | [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/47b85a5eb78226a4604821b39539aeeb) | String | Easy | Recursively divide-and-conquer to compare halves
|5-18-2022          | [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/07e4558f20729b270433ae932756c23e) | Hashtable / String | Easy | Use the math to create the rules
|5-18-2022          | [1971. Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/) |[GitHub Gist](https://gist.github.com/coollikeabreeze/f7feb0a0cc0d5e9bc6fecdb1f1ffcf11) | Graph / BFS | Easy | BFS: queue and visited array for each vertex |
|5-17-2022          | [1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/d562bab9dd2c14a0881a66dfb008b976)| Graph / Breadth-First Search | Medium | BFS works best to catch the first path quickly, track visited nodes
|5-15-2022          | [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |[GitHub Gist](https://gist.github.com/coollikeabreeze/d8a3de0dd942d99117c01776a3a95ff6) | Graph / Depth-First Search | Easy |
|5-15-2022          | [1302. Deepest Leaves Sum](https://leetcode.com/problems/deepest-leaves-sum/submissions/)| [GitHub Gist](https://gist.github.com/coollikeabreeze/f89e57a9662692822a734a73212664d5) | Graph / Depth-First Search | Medium |
| 5-14-2022         | [73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/submissions/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/78b63d60f0e9ba37c660d8d7e7943290)| Array / Matrix | Medium |
| 5-14-2022 | [1791. Find Center of Star Graph](https://leetcode.com/problems/find-center-of-star-graph/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/3e4a20d764f9f5e831c948a0f420715d)| Graph | Easy |
| 5-14-2022 | [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/a5df5685746d13cae349c6930a929ac8) | Linked List / Recursion | Easy |
| 5-13-2022         | [1006. Clumsy Factorial](https://leetcode.com/problems/clumsy-factorial/) |[GitHub Gist](https://gist.github.com/coollikeabreeze/462409c4a6c34e23ca49a3705cea6dd4)  | Math / Stack | Medium |
| 5-11-2022 | [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)| [GitHub Gist](https://gist.github.com/coollikeabreeze/183d1d3fd6244745d24179c90c6bb2a7) | Two-Pointers / Recursion | Easy |
| 5-11-2022 | [142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/32c1a17604c7a9ac36faff6554760f9b)| Two-Pointers / Recursion | Medium | Store visited in hashmap OR FLOYD'S TORTOISE AND HARE ALGORITHM: fast/slow pointers to return 'null' if fast never equals slow, or return 'slow' if fast ever equals slow |
| 5-11-2022 | [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/e624f82c5cd83dade1ed46149c286101)| Recursion / Memoization | Easy |
| 5-10-2022 | [997. Find the Town Judge](https://leetcode.com/problems/find-the-town-judge/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/3ecdfb2e31e941f06cae2323c9efc481)| Graph / Array | Easy | Need only find the any vertex that has n-1 indegress and no outdegrees (just keep a running count +1 for indegrees and -1 for outdegrees)
| 5-6-2022 | [359. Logger Rate Limiter](https://leetcode.com/problems/logger-rate-limiter/) | | Hash Table | Easy |
|5-6-2022 | [1469. Find All The Lonely Nodes](https://leetcode.com/problems/find-all-the-lonely-nodes/) | | Depth First Search | Easy |
| 5-6-2022 | [136. Single Number](https://leetcode.com/problems/single-number/) |[GitHub Gist](https://gist.github.com/coollikeabreeze/1b6963f27404bf4316b224a62a45edf3)| Array | Easy |
| 5-6-2022 | [1689. Partitioning Into Minimum Number Of Deci-Binary Numbers](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/) | [GitHub Gist](https://gist.github.com/coollikeabreeze/439f38844c37d320076f8dc80f3fc30d)| String / Greedy | Medium | Find/return largest integer digit; Tip: JS converts number "string" into integers for comparison (e.g. "3" < "4") |
| 5-6-2022 | [1874. Minimize Product Sum of Two Arrays](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/) |[GitHub Gist](https://gist.github.com/coollikeabreeze/abc329bd4b60dc00e83958a5803f4318) | Array / Greedy | Easy | Recognize: rearranging ONLY ONE array is the same as sorting both and doesn't impact the outcome. Don't get bogged down in this detail.
