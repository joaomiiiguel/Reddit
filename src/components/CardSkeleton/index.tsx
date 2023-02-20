/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Skeleton} from '@rneui/themed';
import {ViewCardLoading, ViewColun} from './styles';

export default function CardSkeleton() {
  return (
    <ViewCardLoading>
      <Skeleton animation="wave" width={'40%'} height={130} />
      <ViewColun>
        <Skeleton animation="wave" width={170} height={5} />
        <Skeleton animation="wave" width={170} height={40} />
        <Skeleton animation="wave" width={150} height={20} />
        <Skeleton animation="wave" width={170} height={8} />
      </ViewColun>
    </ViewCardLoading>
  );
}
