// ─── RaisedBorderCard.tsx ───────────────────────────────────────────────────────
'use client'
import * as React from 'react';
import { Card, CardProps } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Extra knobs you may want to tweak from the outside.
 *  - borderColor → outline colour (defaults to theme divider)
 *  - borderWidth → width in px (defaults 2)
 *  - shadow      → custom boxShadow (defaults to a soft lift)
 */
export interface RaisedBorderCardProps extends CardProps {
  borderColor?: string;
  borderWidth?: number;
  shadow?: string;
}

/* Styled wrapper so you can swap gradient / radius / border in one place. */
const StyledCard = styled(Card, {
  shouldForwardProp: (prop) =>
    prop !== 'borderColor' && prop !== 'borderWidth' && prop !== 'shadow',
})<RaisedBorderCardProps>(({ theme, borderColor, borderWidth, shadow }) => ({
  border: `${borderWidth ?? 2}px solid ${borderColor ?? theme.palette.divider}`,
 // borderRadius: theme.shape.borderRadius * 2, // a tad rounder than default
  boxShadow: shadow ?? '0 6px 16px rgba(10,100,255,0.25)',
 // m:10,
  // optional: let users override with `sx` later
 // backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),   
}));

/** Re-usable “raised border” card */
export default function RaisedBorderCard({
  children,
  borderColor,
  borderWidth,
  shadow,
  elevation = 0, // we fake elevation with boxShadow
  ...rest
}: RaisedBorderCardProps) {
  return (
    <StyledCard
      borderColor={borderColor}
      borderWidth={borderWidth}
      shadow={shadow}
      elevation={elevation}
      {...rest}
    >
      {children}
    </StyledCard>
  );
}
