import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'MusicalSymbols';
		src: url('../static/fonts/MUSICAL.eot'),
      url('../static/fonts/MUSICAL.woff'),
      url('../static/fonts/MUSICAL.ttf'),
      url('../static/fonts/MUSICAL.svg#MusicalSymbolsNormal');
    font-style: normal;
  }
	
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
body{
	background: #32333c;
	color: #fff;
	font-family: 'Montserrat', sans-serif;
	
}

span{
	font-size: 10px;
	}


@media screen and (max-width: 520px) {
	body{
		     transform: scale(0.8) translate(-58px, -64px);	}
}
`;
