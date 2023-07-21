#include <math.h>
#include <stdio.h>

#define N 10

int q[N + 1]; // 存储皇后的列号

int check(int j) { // 检查第 j 个皇后的位置是否合法
    int i;
    for (i = 1; i < j; i ++ ) {
        if (q[i] == q[j] || abs(i - j) == abs(q[i] - q[j])) { // 判断是否在同一列和同一斜线上
            return 0;
        }
    }

    return 1;
}

void queen() { // 求解 N 皇后 方案
    int i;
    for (i = 1; i <= N; i ++ ) {
        q[i] = 0;
    }

    int answer = 0; // 方案数

    int j = 1; // 表示正在摆放第 j 个皇后
    while (j >= 1) {
        q[j] = q[j] + 1; // 让第 j 个皇后向后一列摆放

        while (q[j] <= N && !check(j)) { // 判断第 j 个皇后的位置是否合法
            q[j] = q[j] + 1; // 不合法就往后一个位置摆放
        }

        if (q[j] <= N) { // 表示第 j 个皇后的找到一个合法的摆放位置
            if (j == N) { // 找到了 N 皇后的一组解
                answer = answer + 1;
                printf("方案%d：", answer);

                for (i = 1; i <= N; i ++ ) {
                    printf("%d ", q[i]);
                }
                printf("\n");
            } else {
                j = j + 1; // 继续摆放下一个皇后
            }
        } else { // 表示第 j 个皇后找不到一个合法的摆放位置
            q[j] = 0; // 还原第 j 个皇后的位置
            j = j - 1; // 回溯
        }
    }
}

int main() {
    queen();

    return 0;
}
