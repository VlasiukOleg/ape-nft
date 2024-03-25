import { forwardRef } from 'react';

import {
  Form,
  Input,
  InputIcon,
  SvgIconWrap,
  Label,
  ErrorMessage,
} from './ContactForm.styled';

import { Button } from 'components/Button/Button';

import icon from '../../assets/icons/svg-sprite.svg';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const discordRegex = /^[A-Za-z@]+$/;
const walletRegex = /^[0-9a-zA-Z]+$/;

const contactValidationSchema = Yup.object({
  discord: Yup.string()
    .matches(discordRegex, 'WRONG discord')
    .required('WRONG discord'),
  address: Yup.string()
    .matches(walletRegex, 'WRONG ADDRESS')
    .required('WRONG ADDRESS'),
});

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(contactValidationSchema),
    mode: 'onChange',
  });

  const onSubmit = data => {
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Label>
        <SvgIconWrap>
          <InputIcon>
            <use href={icon + `#icon-discord`}></use>
          </InputIcon>
        </SvgIconWrap>

        <Input
          name="discord"
          type="text"
          placeholder="@username"
          {...register('discord')}
          error={errors.discord}
        ></Input>
        <ErrorMessage>{errors.discord?.message}</ErrorMessage>
      </Label>

      <Label>
        <SvgIconWrap>
          <InputIcon>
            <use href={icon + `#icon-wallet`}></use>
          </InputIcon>
        </SvgIconWrap>

        <Input
          name="address"
          type="text"
          placeholder="Wallet address"
          {...register('address')}
          error={errors.address}
        ></Input>
        <ErrorMessage>{errors.address?.message}</ErrorMessage>
      </Label>

      <Button type="submit" $bgColor="accent" $color="light">
        {isSubmitSuccessful
          ? 'MINTED'
          : errors.address || errors.discord
          ? 'ERROR'
          : 'MINT'}
      </Button>
    </Form>
  );
};
