# react-form-design

### Demo online

[在线查看](https://zuolung.github.io/react-form-design/dist/index.html)

### install

npm i react-form-art -S

### API

### Form

| 属性           | 说明                   | 类型            | 默认值 |
| -------------- | ---------------------- | --------------- | ------ |
| className      | form 标签类名          | string          | ''     |
| initValues     | 表单项统一初始化       | Object          | {}     |
| onFinish       | 表单提交触发           | Function        | {}     |
| onFinishFailed | 表单提交触发           | Function        | {}     |
| ref            | 可获取表单仓库实例方法 | React.RefObject | {}     |

##### FormItem

| 属性              | 说明                                                       | 默认值                                                                    | 版本       |
| ----------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------- | ---------- |
| className         | FormItem 容器的类名                                        | string                                                                    | -          |
| labelClassName    | label 的类名                                               | string                                                                    | -          |
| controllClassName | 表单项所在容器的类名                                       | string                                                                    | -          |
| requiredClassName | 必填标识的类名                                             | string                                                                    | -          |
| requiredIcon      | 自定义必填标识 icon                                        | React.ReactNode                                                           | -          |
| label             | label 标签的文本                                           | React.ReactNode                                                           | -          |
| labelWidth        | label 标签的文本                                           | number                                                                    | -          |
| name              | 表单项字段名称                                             | string                                                                    | -          |
| rules             | 表单项校验逻辑, message 属性针对 rule 为 RegExp 触发       | { rule: RegExp 或者 Function：(value, call)=> {call(null)}, message: '' } | -          |
| trigger           | 表单项更改的方法名                                         | string                                                                    | 'onChange' |
| validateTrigger   | 表单项规则校验触发的方法名                                 | string                                                                    | 'onBlur'   |
| required          | 表单项是否必填                                             | Boolean                                                                   | false      |
| messageShow       | 表单项错误提示类型, 错误的时候提示，成功的时候提示，都提示 | 'failed'/'success'/'all'/'hidden'                                         | 'all'      |

### form 实例的方法

```
function Demo() {
  const form = React.useRef(null)
  return <Form ref={form}>...</Form>
}
```

form.current 的 API 如下：

| 属性           | 说明                           | 类型                           |
| -------------- | ------------------------------ | ------------------------------ |
| getFieldValue  | 传入表单主键，返回表单值       | （key: String）=> FieldValue   |
| getFieldsValue | 获取所有表单值                 | Object => FieldValues          |
| resetFields    | 重置表单所有值                 | values:Object => void          |
| setFields      | 设置表单值                     | values:Object => void          |
| submit         | 提交方法，回掉参数是否校验完成 | (boolean, FieldValues) => void |

### 基本使用

```
import { InputItem, Button, Picker } from "antd-mobile";
import Form from "react-form-art";
import React from "react";

const FormItem = Form.FormItem
const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

function Demo() {
  const form = React.useRef(null)
  React.useEffect(() => {
    console.log(form.current, '<form.current')
  }, [])

  const handleClick = () => {
    form.current.submit((t) => {
      console.log(t)
    })
  }

  return <div style={{ padding: '50px 20px 0 20px' }} >
    <Form
      initialValues={{ name: '我是初始值' }}
      ref={form}
      onFinish
    >
      <FormItem
        label="我的名称"
        labelWidth={150}
        name="name"
        required
        rules={{
          rule: /[\u4e00-\u9fa5]/,
          message: '名称仅支持中文',
        }}
        validateTrigger="onBlur"
      >
        <InputItem
          placeholder="请输入名称（中文）"
        />
      </FormItem>

      <div style={{ color: 'blue', marginBottom: 20 }}>
        （我的名称）输入字数大于两个 的时候要选择夏季
      </div>

      <FormItem
        label="季节选择"
        labelWidth={150}
        name="yearSeason"
        validateTrigger="onOk"
        trigger="onOk"
        messageShow="failed"
        rules={{
          rule: (values, call) => {
            if (form.current.getFieldValue('name').length > 2) {
              if (values[1] !== '夏') {
                call('此时要选择夏季')
              }
            } else call(null)
          }
        }}
      >
        <Picker
          data={seasons}
          title="选择季节"
          cascade={false}
        >
          <List.Item arrow="horizontal" style={{ width: 200 }} />
        </Picker>
      </FormItem>

      <Button onClick={handleClick}>提交</Button>
    </Form>
  </div>
}

export default Demo;
```
