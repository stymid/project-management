import localFont from 'next/font/local';
// import { Fira_Code as FontMono, Inter as FontSans } from 'next/font/google';

// export const fontSans = FontSans({
//   subsets: ['latin'],
//   variable: '--font-sans',
// });

// export const fontMono = FontMono({
//   subsets: ['latin'],
//   variable: '--font-mono',
// });
export const iranYecanX = localFont({
  src: [
    {
      path: '../public/fonts/IRANYEKANX-THIN.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANYEKANX-ULTRALIGHT.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANYEKANX-LIGHT.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANYEKANX-REGULAR.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANYEKANX-MEDIUM.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANYEKANX-DEMIBOLD.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANYEKANX-BOLD.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANYEKANX-EXTRABOLD.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANYEKANX-HEAVY.ttf',
      weight: '850',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANYEKANX-BLACK.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANYEKANX-EXTRABLACK.ttf',
      weight: '950',
      style: 'normal',
    },
  ],
  variable: '--font-iranyekanx',
  display: 'swap',
});
