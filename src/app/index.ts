// 在tsconfig.json中include了@types的声明文件后可不需要下面两种方式的引用
// /// <reference path="../../node_modules/@types/jquery/index.d.ts" />
// import * as $ from "jquery";
$(() => {

});

class C {
    @readonly
    @enumerable(false)
    method() { }
}

const readonly = (target, name, discriptor: TypedPropertyDescriptor<any>) => {
    discriptor.writable = false;
    return discriptor;
}

const enumerable = (value: boolean): MethodDecorator => <T>(target: Object, name: string | Symbol, discriptor: TypedPropertyDescriptor<T>) => {
    discriptor.enumerable = value;
    return discriptor;
}
