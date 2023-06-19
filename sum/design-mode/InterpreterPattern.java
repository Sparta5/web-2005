import java.util.*;
// 解释器模式 Interpreter
public class InterpreterPattern {
    public static void main(String[] args) {
        Context context = new Context();

        context.check("A区的开发人员");
        context.check("B区的调试人员");
        context.check("C区的测试人员");

        System.out.println("==========");

        context.check("D区的程序员");
        context.check("D区的测试员");
        context.check("A区的程序员");
    }
}

class Context {
    private String[] regions = {"A区", "B区", "C区"};
    private String[] persons = {"开发人员", "测试人员", "调试人员"};

    private NonterminalExprssion nonterminal;

    public Context() {
        TerminalExpression region = new TerminalExpression(regions);
        TerminalExpression person = new TerminalExpression(persons);
        nonterminal = new NonterminalExprssion(region, person);
    }

    public void check(String info) {
        boolean bool = nonterminal.Interpret(info);
        if (bool) {
            System.out.println("识别成功");
        } else {
            System.out.println("识别失败");
        }
    }
}

interface Expression {
    public boolean Interpret(String info);
}

class NonterminalExprssion implements Expression {
    private TerminalExpression region;
    private TerminalExpression person;

    public NonterminalExprssion(TerminalExpression region, TerminalExpression person) {
        this.region = region;
        this.person = person;
    }

    @Override
    public boolean Interpret(String info) {
        String[] str = info.split("的");
        // B区的调试人员 --> str = {"B区", "调试人员"}

        return region.Interpret(str[0]) && person.Interpret(str[1]);
    }
}

class TerminalExpression implements Expression {
    private Set<String> set = new HashSet<>();

    public TerminalExpression(String[] data) {
        // for (遍历对象类型 对象名 : 遍历对象)
        for (String str : data) {
            set.add(str);
        }
    }

    @Override
    public boolean Interpret(String info) {
        return set.contains(info);
    }
}