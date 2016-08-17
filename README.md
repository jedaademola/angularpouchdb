# angularpouchdb
E health Short  Programming

DEPTH FIRST TREE TRAVERSAL
----------------------------------
Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures.
One starts at the root (selecting some arbitrary node as the root in the case of a graph) and explores as far as possible along each branch before backtracking.


Trees can be traversed in pre-order, in-order, or post-order.[1] These searches are referred to as depth-first search (DFS),
as the search tree is deepened as much as possible on each child before going to the next sibling. For a binary tree, they are defined as display operations recursively at each node,
starting with the root, whose algorithm is as follows:

The general recursive pattern for traversing a (non-empty) binary tree is this: At node N you must do these three things:

(L) recursively traverse its left subtree. When this step is finished you are back at N again.

(R) recursively traverse its right subtree. When this step is finished you are back at N again.

(N) Actually process N itself.

We may do these things in any order and still have a legitimate traversal. If we do (L) before (R), we call it left-to-right traversal, otherwise we call it right-to-left traversal.

PRE-ORDER

Display the data part of the root (or current node).
Traverse the left subtree by recursively calling the pre-order function.
Traverse the right subtree by recursively calling the pre-order function.

IN-ORDER

Traverse the left subtree by recursively calling the in-order function.
Display the data part of the root (or current node).
Traverse the right subtree by recursively calling the in-order function.
In a search tree, in-order traversal retrieves data in sorted order.

POST-ORDER

Traverse the left subtree by recursively calling the post-order function.
Traverse the right subtree by recursively calling the post-order function.
Display the data part of the root (or current node).
The trace of a traversal is called a sequentialisation of the tree. The traversal trace is a list of each visited root.
No one sequentialisation according to pre-, in- or post-order describes the underlying tree uniquely. Given a tree with distinct elements,
 either pre-order or post-order paired with in-order is sufficient to describe the tree uniquely. However, pre-order with post-order leaves some ambiguity in the tree structure.[5]

GENERIC TREE

To traverse any tree with depth-first search, perform the following operations recursively at each node:

PERFORM PRE-ORDER OPERATION.

For each i from 1 to the number of children do:
Visit i-th, if present.
Perform in-order operation.
Perform post-order operation.
Depending on the problem at hand, the pre-order, in-order or post-order operations may be void, or you may only want to visit a specific child, so these operations are optional.
Also, in practice more than one of pre-order, in-order and post-order operations may be required. For example, when inserting into a ternary tree, a pre-order operation is performed by comparing items. A post-order operation may be needed afterwards to re-balance the tree.



PSEUDOCODE

Input: A graph G and a vertex v of G

Output: All vertices reachable from v labeled as discovered

A recursive implementation of DFS:

1  procedure DFS(G,v):
2      label v as discovered
3      for all edges from v to w in G.adjacentEdges(v) do
4          if vertex w is not labeled as discovered then
5              recursively call DFS(G,w)
A non-recursive implementation of DFS:

1  procedure DFS-iterative(G,v):
2      let S be a stack
3      S.push(v)
4      while S is not empty
5          v = S.pop()
6          if v is not labeled as discovered:
7              label v as discovered
8              for all edges from v to w in G.adjacentEdges(v) do
9                  S.push(w)



APPLICATIONS

Randomized algorithm similar to depth-first search used in generating a maze.
Algorithms that use depth-first search as a building block include:

Finding connected components.
Topological sorting.
Finding 2-(edge or vertex)-connected components.
Finding 3-(edge or vertex)-connected components.
Finding the bridges of a graph.
Generating words in order to plot the Limit Set of a Group.
Finding strongly connected components.
Planarity testing
Solving puzzles with only one solution, such as mazes. (DFS can be adapted to find all solutions to a maze by only including nodes on the current path in the visited set.)
Maze generation may use a randomized depth-first search.
Finding biconnectivity in graphs.

