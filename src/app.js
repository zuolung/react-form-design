import { InputItem, Button, Picker, List } from "antd-mobile";
import Form from "./components/index";
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
    console.log(form.current, '<<<<<<<<<<<<<<<<<<<<<form.current')
  }, [])

  const handleClick = () => {
    if (form.current) console.info(form.current.getFieldsValue())
    form.current.submit((res) => {
      console.log(res)
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
        required={false}
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
        rules={{
          rule: (values, call) => {
            if (form.current.getFieldValue('name').length > 2) {
              if (values[1] !== '夏') {
                call('此时要选择夏季')
              }
            } else call(null)
          }
        }}
        validateTrigger="onOk"
        trigger="onOk"
        messageShow="failed"
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