import collections

# Create an undirected graph adjacency list with derived words. Then run DFS to find number of graphs or "islands"
class Solution:
    def numberOfDistinctMeanings(self, words):
        words.sort(key=len)

        def doWordsHaveSameMeaning(w1, w2):
            if len(w2) - len(w1) != 1:
                return False
            for i in range(len(w1)):
                if w1[i] != w2[i]:
                    return w1[i:] == w2[i + 1 :]
            return True

        adj = collections.defaultdict(list)
        n = len(words)

        for i in range(n - 1):
            for j in range(i + 1, n):
                word_len_diff = abs(len(words[i]) - len(words[j]))
                if word_len_diff == 0:
                    continue
                if word_len_diff > 1:
                    break
                if doWordsHaveSameMeaning(words[i], words[j]):
                    adj[i].append(j)
                    adj[j].append(i)

        def dfs(wi):
            visited[wi] = True
            for v in adj[wi]:
                if not visited[v]:
                    dfs(v)

        # run dfs to get connected components
        visited = [False] * n

        cnt = 0
        for i in range(n):
            if not visited[i]:
                cnt += 1
                dfs(i)
        return cnt


if __name__ == "__main__":
    s = Solution()
    words1 = ["caw", "caaw", "caww", "hoot", "hooot", "chirp"]
    assert s.numberOfDistinctMeanings(words1) == 3

    words1 = ["raw", "rawo", "raow", "peet", "peaet"]
    assert s.numberOfDistinctMeanings(words1) == 2

    words1 = ["abc", "abd", "abcd"]
    assert s.numberOfDistinctMeanings(words1) == 1

    print("all tests ran successfully")
