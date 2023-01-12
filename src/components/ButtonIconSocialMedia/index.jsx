import React from "react";

import { ContainerButton } from './styles';

export function ButtonIconSocialmedia(props, LinkSocialMedia ){
  return (
    <ContainerButton target="_blank" href={LinkSocialMedia}>
        {props.children}
    </ContainerButton>
  )
}