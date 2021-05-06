import React from 'react'
import Baz from './baz'

interface FooProps {
  baz: boolean
  list: any[]
}

const Foo = (props: FooProps) => {
  const {
    baz,
    list: entries = '',
  } = props

  const items = (list) => {
    const filteredList = list
      .filter(i => i !== null)
      .map(item => ({ bar: item.baz }))

    return filteredList.map((item, index) => (
      <Baz
        key={index}
        bar={item.bar}
        something={item.bar}
      />
    ))
  }

  return (
    <span>
      {list && (
        <div>
          {`Count is ${props.count} for items: `} {items(list)}
        </div>
      )}
      {!list && (
        <>{`Count is ${props.count} for items: `} n/a</>
      )}
    </span>
  )
}
