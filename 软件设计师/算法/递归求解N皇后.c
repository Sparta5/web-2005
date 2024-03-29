#include <math.h>
#include <stdio.h>

#define N 10

int answer = 0;
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

void queen(int j) {
    int i;
    for (i = 1; i <= N; i ++ ) {
        q[j] = i;

        if (check(j)) { // 当摆放的皇后位置为合法时
            if (j == N) { // 找到了 N 皇后的一组解
                answer = answer + 1;
                printf("方案%d：", answer);

                for (i = 1; i <= N; i ++ ) {
                    printf("%d ", q[i]);
                }
                printf("\n");
            } else {
                queen(j + 1); // 递归摆放下一个皇后的位置
            }
        }
    }
}

int main() {
    queen(1);

    return 0;
}
