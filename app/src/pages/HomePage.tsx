import React from 'react';

import { Alignment, Box, Button, Direction, Image, KibaIcon, MultiLineInput, PaddingSize, ResponsiveContainingView, Spacing, Stack } from '@kibalabs/ui-react';

import { Footer } from '../components/Footer';

const BACK_KEY = {
  የየ: 'w',
  ጣ: 'r',
  // pirority above
  ሃ: 'a',
  ቧ: 'b',
  ሣ: 'c',
  ካ: 'd',
  ኪ: 'e',
  ሢ: 'f',
  ህ: 'g',
  ኑ: 'h',
  ሀ: 'i',
  // 'ሀ': 'j',
  // 'ጣ': 'k',
  ኒ: 'l',
  ኳ: 'm',
  ኡ: 'n',
  ጤ: 'o',
  ጢ: 'p',
  ቈ: 'q',
  ኴ: 's',
  ኲ: 't',
  የ: 'u',
  // 'የ': 'v',
  ሇ: 'x',
  ኚ: 'y',
  ሗ: 'z',
};

const FORWARD_KEY = {
  a: 'ሃ',
  b: 'ቧ',
  c: 'ሣ',
  d: 'ካ',
  e: 'ኪ',
  f: 'ሢ',
  g: 'ህ',
  h: 'ኑ',
  i: 'ሀ',
  j: 'ሀ',
  k: 'ጣ',
  l: 'ኒ',
  m: 'ኳ',
  n: 'ኡ',
  o: 'ጤ',
  p: 'ጢ',
  q: 'ቈ',
  r: 'ጣ',
  s: 'ኴ',
  t: 'ኲ',
  u: 'የ',
  v: 'የ',
  w: 'የየ',
  x: 'ሇ',
  y: 'ኚ',
  z: 'ሗ',
};

export const HomePage = (): React.ReactElement => {
  const [editText, setEditText] = React.useState<string | undefined>(undefined);
  const [outputText, setOutputText] = React.useState<string | undefined>(editText);

  const onEditTextChanged = React.useCallback((input: string): void => {
    setEditText(input);
    let output = input;
    Object.keys(BACK_KEY).forEach((key: string): void => {
      output = output.replaceAll(key, BACK_KEY[key]);
    });
    setOutputText(output);
  }, []);

  const onOutputTextChanged = React.useCallback((input: string): void => {
    setOutputText(input);
    let output = input;
    Object.keys(FORWARD_KEY).forEach((key: string): void => {
      output = output.replaceAll(key, FORWARD_KEY[key]);
    });
    setEditText(output);
  }, []);

  const getShareText = (): string => {
    return encodeURIComponent('Check out the WTCHS Translator by the guys from @tokenpagexyz https://wtchs.tokenpage.xyz Tኪኒኒ ኚጤየጣ ሢጣሀኪኡካኴ ኳኚ ኒሀኲኲኒኪ ቧሀጣካሀኪኴ #WTCHS');
  };

  return (
    <ResponsiveContainingView sizeResponsive={{ base: 12, medium: 10, large: 8 }}>
      <Stack direction={Direction.Vertical} isFullWidth={true} isFullHeight={true} childAlignment={Alignment.Center} contentAlignment={Alignment.Center} padding={PaddingSize.Wide2} paddingTop={PaddingSize.Wide3} shouldAddGutters={true}>
        <Box width='300px' maxWidth='90%'>
          <Image source='/assets/logo.png' alternativeText='WTCHS logo' />
        </Box>
        <Stack.Item growthFactor={1} shrinkFactor={1}>
          <Spacing variant={PaddingSize.Wide2} />
        </Stack.Item>
        <Box width='750px' maxWidth='90%'>
          <MultiLineInput
            value={editText}
            onValueChanged={onEditTextChanged}
            placeholderText='WTCH speak'
            minRowCount={5}
          />
        </Box>
        <Box width='25px' height='25px'>
          <Image source='/assets/arrows.png' alternativeText='arrows' />
        </Box>
        <Box width='750px' maxWidth='90%'>
          <MultiLineInput
            value={outputText}
            onValueChanged={onOutputTextChanged}
            placeholderText='Human talk'
            minRowCount={5}
          />
        </Box>
        <Stack.Item growthFactor={1} shrinkFactor={1}>
          <Spacing variant={PaddingSize.Wide2} />
        </Stack.Item>
        <Spacing variant={PaddingSize.Wide2} />
        <Button text='Share the love' iconLeft={<KibaIcon iconId='ion-logo-twitter' />} target={`https://twitter.com/intent/tweet?text=${getShareText()}`} />
        <Footer />
      </Stack>
    </ResponsiveContainingView>
  );
};
