import React from 'react';

import { RadioButton } from '../../atoms';

import './radioButtonGroup.css'

export { RADIO_DIRECTION } from '../../atoms';

const RadioButtonGroup = (props: Props) => {

  const { radioButtons, containerClassName, onSelect, selected, ...restProps } = props;

  return (
    <div id="container" className={containerClassName} >
      {
        radioButtons.map((item: RadioButtonType, index: number) => {
          return (
            <div key={`${item.value}${index}`} {...restProps}>
              <RadioButton
                selected={selected === item.value}
                onSelect={() => onSelect(item.value)}
                label={item.label}
                labelClassName={item.labelClassName}
                parentClassName={item.parentClassName}
                radioDirection={item.radioDirection}
              />
            </div>
          )
        })
      }
    </div>
  )
}


const defaultProps: DefaultProps = {
  containerClassName: ''
};


type DefaultProps = {
  containerClassName: string
}


type RequiredProps = {
  radioButtons: RadioButtonType[]
  selected: string | number,
  onSelect: Function
}


export type RadioButtonType = {
  value?: string,
  label?: string;
  labelClassName?: string;
  parentClassName?: string;
  radioDirection?: string;
}


export type Props = DefaultProps & RequiredProps;

RadioButtonGroup.defaultProps = defaultProps;

export default React.memo(RadioButtonGroup);
