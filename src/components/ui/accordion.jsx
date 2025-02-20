'use client';

import { Accordion as ArkAccordion } from '@ark-ui/react/accordion';
import {
  HTMLChakraProps,
  SlotRecipeProps,
  UnstyledProp,
  createSlotRecipeContext,
} from '../../styled-system';

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useAccordionStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: 'accordion' });

export { useAccordionStyles };

////////////////////////////////////////////////////////////////////////////////////

export const AccordionRootProvider = withProvider(
  ArkAccordion.RootProvider,
  'root',
  { forwardAsChild: true }
);

////////////////////////////////////////////////////////////////////////////////////

export const AccordionRoot = withProvider(ArkAccordion.Root, 'root', {
  forwardAsChild: true,
});

////////////////////////////////////////////////////////////////////////////////////

export const AccordionPropsProvider = PropsProvider;

////////////////////////////////////////////////////////////////////////////////////

export const AccordionItem = withContext(ArkAccordion.Item, 'item', {
  forwardAsChild: true,
});

////////////////////////////////////////////////////////////////////////////////////

export const AccordionItemContent = withContext(
  ArkAccordion.ItemContent,
  'itemContent',
  {
    forwardAsChild: true,
  }
);

////////////////////////////////////////////////////////////////////////////////////

export const AccordionItemBody = withContext('div', 'itemBody');

////////////////////////////////////////////////////////////////////////////////////

export const AccordionItemTrigger = withContext(
  ArkAccordion.ItemTrigger,
  'itemTrigger',
  {
    forwardAsChild: true,
  }
);

////////////////////////////////////////////////////////////////////////////////////

export const AccordionItemIndicator = withContext(
  ArkAccordion.ItemIndicator,
  'itemIndicator',
  {
    forwardAsChild: true,
  }
);

////////////////////////////////////////////////////////////////////////////////////

export const AccordionContext = ArkAccordion.Context;
export const AccordionItemContext = ArkAccordion.ItemContext;
