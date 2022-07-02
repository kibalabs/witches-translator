import React from 'react';

import { Alignment, Box, Direction, Image, LinkBase, PaddingSize, Stack, Text } from '@kibalabs/ui-react';

interface IFooterProps {
  tokenPageReferral: string
  isSmall?: boolean;
}

export const Footer = (props: IFooterProps): React.ReactElement => {
  return (
    <Stack direction={Direction.Vertical} shouldAddGutters={true} childAlignment={Alignment.Center}>
      <LinkBase target={`https://www.tokenpage.xyz?ref=${props.tokenPageReferral}`}>
        <Stack direction={Direction.Horizontal} childAlignment={Alignment.Center} contentAlignment={Alignment.Center} shouldAddGutters={true} padding={PaddingSize.Default}>
          <Text>Made by</Text>
          <Box shouldClipContent={true} width={props.isSmall ? '1rem' : '1.5rem'} height={props.isSmall ? '1rem' : '1.5rem'}>
            <Image source='https://www.tokenpage.xyz/assets/favicon.png' alternativeText='TokenPage Logo' fitType='contain' />
          </Box>
          <Text variant={props.isSmall ? 'note' : 'default'}>Token Page</Text>
        </Stack>
      </LinkBase>
    </Stack>
  );
};
