import React from 'react'
import { render } from 'react-dom'
import 'rc-editor-core/assets/index.css'
import 'rc-select/assets/index.css'
import { Input } from 'antd'
import { EditorCore, Toolbar, GetHTML } from 'rc-editor-core'
import BasicStyle from 'rc-editor-plugin-basic-style'
import Emoji from 'rc-editor-plugin-emoji'
import Image from 'rc-editor-plugin-image'
import { Entity } from 'draft-js'
import 'rc-editor-plugin-emoji/assets/index.css'

const Wrapper = props => <div {...props} />
const blockPlugin = {
  name: 'image',
  callbacks: {
    setEditorState: null,
    getEditorState: null
  },
  blockRenderMap: {
    img: {
      element: 'img'
    },
    paragraph: {
      element: 'p'
    }
  }
}

function MediaBlock(props) {
  const { block } = props
  console.log('>> block', block)
  const entity = block.getEntityAt(0)
  if (entity) {
    const entityInstance = Entity.get(entity)
    const entityData = entityInstance.getData()
    console.log('MediaBlock', entityInstance.getType(), entityData)
  }
  return <span>MediaBlock</span>
}

const ImagePlugin = {
  name: 'image',
  callbacks: {
    setEditorState: null,
    getEditorState: null
  },
  blockRendererFn: contentBlock => {
    if (contentBlock.getType() === 'image-block') {
      return {
        component: MediaBlock,
        editable: false
      }
    }
  },
  blockRenderMap: {
    'image-block': {
      component: 'div',
      editable: false
    }
  }
}

const plugins = [blockPlugin, ImagePlugin, BasicStyle, Emoji]
const toolbars = [
  [
    'fontSize',
    '|',
    'fontColor',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    '|',
    'superscript',
    'subscript',
    '|',
    'align-justify',
    'align-left',
    'align-right',
    'align-middle',
    '|',
    'image'
  ]
]

export default class EditorWithPreview extends React.Component {
  state = {
    html: ''
  }
  editorChange = editorState => {
    const { editorFormValue } = this.props
    this.setState({
      html: GetHTML(editorState)
    })

    editorFormValue && editorFormValue(GetHTML(editorState))
  }
  render() {
    return (
      <div style={{ zIndex: '9999' }}>
        {/*<div
          className="preview"
          dangerouslySetInnerHTML={{ __html: this.state.html }}
        />*/}
        <Input value={this.state.html} />
        <EditorCore
          prefixCls="rc-editor-core"
          plugins={plugins}
          toolbars={toolbars}
          pluginConfig={{ prefixCls: 'rc' }}
          placeholder="情输入内容"
          onChange={this.editorChange}
        />
      </div>
    )
  }
}
