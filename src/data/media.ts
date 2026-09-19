/**
 * BhummiVastu Media Library
 *
 * Instagram reel order and view counts were captured from the public
 * @bhummivastu reels grid on 19 September 2026. Instagram exposes view counts
 * publicly in the grid, but does not expose a dependable public likes count
 * for this catalog, so featured items are ranked by views.
 *
 * Keep Instagram items in descending `sortOrder` when adding a newly published
 * reel. The page sorts the complete library by this field so the latest reel
 * remains first even when other platforms are added later.
 */

export interface MediaItem {
  title: string;
  platform: 'Facebook' | 'Instagram' | 'YouTube' | 'Other';
  type: 'Reel' | 'Video' | 'Post' | 'Interview' | 'Talk' | 'Short';
  url: string;
  embedUrl?: string;
  summary: string;
  published?: string;
  sortOrder: number;
  views?: number;
  likes?: number;
  featured?: boolean;
}

const instagramUrl = (shortcode: string) => `https://www.instagram.com/reel/${shortcode}/`;

const instagramThumbnails: Record<string, string> = {
  DdbuYWrhAGV:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.71878-15/814768841_1952867895398538_7141058036836664742_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=d5Mmgz0f0pMQ7kNvwH8-tTB&_nc_oc=Adpd7rmTt77Tq9P1pPIOKdRZ-ajmsWijycJyG4sfHg-IMUz6ne-NIzplkzw7LA_gmlI&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=1K0CdHs9qjeu1gdRaBKRGg&_nc_ss=72689&oh=00_AQJsUgdUsci2pKzhKHJznX8E2ETIEqYCy5ek-bnbBJTFBA&oe=6AB41DC1',
  DdOR59qj9Pl:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/807673723_17908070910499471_2364279722046349175_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=7aDc7Qncw4UQ7kNvwHuPM99&_nc_oc=AdoDzxDjENCs5xGZXhTRGjOex0F2b6cL0o7kwfO8dCdpmNufwtvJ8Vy8vNl7rWu4rkY&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=OkDZR4SjIREQ9kskQgIEmQ&_nc_ss=72689&oh=00_AQJCY0JMlzAhCvA5IWvbYv7snWt4nzB9btU6x8gqceUBTA&oe=6AB44677',
  DdAS_LHDI0D:
    'https://scontent-bom2-4.cdninstagram.com/v/t51.82787-15/800275360_17907294045499471_6416178193545991771_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=9hFZ8QIpOPUQ7kNvwGNZcU0&_nc_oc=AdpaYnqjMznpI64apfk13zpZ4hVJUiwvYwPp1whm7rTGlxp_fLKcwGIe8P-FWujBdGc&_nc_zt=23&_nc_ht=scontent-bom2-4.cdninstagram.com&_nc_gid=mv-mNVYxd4xXin5QBOb5HA&_nc_ss=72689&oh=00_AQJa_ve5uyuU_yDZm8MZoiCC3C1OySaIIyAIJgqv-l9JAg&oe=6AB44073',
  Dc78fNHh8kU:
    'https://scontent-bom2-4.cdninstagram.com/v/t51.71878-15/796324636_1100556302313446_4481725038670238008_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=tBpR1iA0qQMQ7kNvwH9Q-G5&_nc_oc=Adrx75wg6SjW3vEvYPur9EXDsntfvPS9YRacbXSzglkUye9m-HS2tjNGie81C1rG4Wo&_nc_zt=23&_nc_ht=scontent-bom2-4.cdninstagram.com&_nc_gid=hhgCojMR2C-2knAd_Lyeyg&_nc_ss=72689&oh=00_AQJiZs6cui9RWQo4Jbny7bkgdMAafHIIr8uL6Y4crunOJQ&oe=6AB44C97',
  Dc2qPyPkcA_:
    'https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/794141178_17906743632499471_6304485799011282380_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=iWXJ3jwL2YwQ7kNvwF-fQVP&_nc_oc=AdrQZx7L_ehPmxleLsmdnFn-9HQQ2dAGTecXfa2BYnNToY3TA1mlHxudfwrYbyTk7aA&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_gid=WzARx40KiplzoIqnp3biKg&_nc_ss=72689&oh=00_AQLUQLrTd9BU1WZAHZQMQgwvMsfWSrx4d63LlGYwGqxlIg&oe=6AB44F79',
  DcydsEMDDbw:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/792716762_17906489082499471_3421399326062294377_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=uOthSHXehR8Q7kNvwFrG2NC&_nc_oc=AdrJqJY4myVumX0pF2aKLCz7k71X3TStkwGUNMCo2oNVH10tv8BVbAekJDAjqrFzbH8&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=em8styawMdVMeTHbrYsoVw&_nc_ss=72689&oh=00_AQIi3fRamYmPHViHfuFNABkJYe5F0KHRJY3hC7wkqgCMnA&oe=6AB42B2C',
  DcvyvDWCWsY:
    'https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/789911921_17906337894499471_8346191762840256284_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=4P_l_8WijaQQ7kNvwGCx9UC&_nc_oc=AdrRGGIbp03J9MXszvF3d7SK9_M6KEBY2DxYryEU4jyFOHk0IuQibKF208kv8H85Mfk&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_gid=JrhjW7ZMtYm7vxQXVqFbhA&_nc_ss=72689&oh=00_AQLSdZuYHy3cpC-RFj4TE9f7dBVZqMZ-oBwYbQyXzPePnQ&oe=6AB44C54',
  DctJrNHhh9E:
    'https://scontent-bom2-4.cdninstagram.com/v/t51.71878-15/789706739_1381774593446148_4213173214140956474_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=WnM0xttS40QQ7kNvwE2Hebn&_nc_oc=Adqd43buFGO-9Vs5QeX_p53EEXWTbGkQxw_3fOMteQRty8NC2GBUxo5jVrRgFk47-ww&_nc_zt=23&_nc_ht=scontent-bom2-4.cdninstagram.com&_nc_gid=AjsYBbA1gtuvf2p2JwRN9A&_nc_ss=72689&oh=00_AQLmPuQDj0_NvI4N6Ik5SX6wqDxkvfZIeUYJcwlHWOtIBw&oe=6AB42E27',
  Dcpl55nDamD:
    'https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/788613055_17905990077499471_6263136146767629457_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=yEEQoeO18_4Q7kNvwHwhYyP&_nc_oc=AdqY6kpI_pxSjb-w9bGlgx81JqzFldzMAusYjnSA5nn4KcU_w__xVUJcixcPJ0LrVOE&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_gid=nEck4d-p5HbI7Q5X4Sr1yw&_nc_ss=72689&oh=00_AQJjokqxvg-J97uOHjbsr8JiCxixRGTHxjz2O9f2opQGUg&oe=6AB43983',
  DcnBFY7CFVV:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/787941843_17905836645499471_4221963687435101104_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=ZzdV6b3dKW0Q7kNvwFKWp26&_nc_oc=AdoLkhlDO4M6i_1EHiiMOQyrPmUqX6Z-JV78z96KST7cZOmC-mnZPYAFbt3PiLdoWLA&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=AOBMwjHbIjJSQjIvS6e-iw&_nc_ss=72689&oh=00_AQLDucFVlKJXyfN6b_3tC669XRrtg9np2QmHuyZWJjOQAg&oe=6AB44774',
  DclXZcIiKdS:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/785560959_17905740003499471_6217995618112295312_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=k6HF8Fp0XsgQ7kNvwF9trcv&_nc_oc=Adrr0-ewqLJ7fb0sFjNMwiz78gqmOeWqJIGVdpV1D_pFwJnfa3DBMFp9QkuwuCSwZU8&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=2WJyjX4UIbMoD5q5rrvoyw&_nc_ss=72689&oh=00_AQKXc6jOXfP8ax_hY-m9sVXjB8JSpvka16lFUFJVSHJw1w&oe=6AB42211',
  DciygwEDnLn:
    'https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/784717242_17905584663499471_1112750624434296385_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=j_NSxEI00zQQ7kNvwHbX-Wc&_nc_oc=AdpLvgDyt6Xpj_SeuN1yDdSaSMh6pUuIgv-QfnR1V7qCzQlD3eHEsHgexxCNHMsa2dc&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_gid=ql_K7coMuBVHcB6CUXCMug&_nc_ss=72689&oh=00_AQJiFDmNMu7Z4J9omdf_UOKpJ98RwfB4Sj0PFT96N7UjTw&oe=6AB43610',
  DcgNva2jvtH:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/786107000_17905449279499471_4975738029261425151_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=FnU8R0KVauIQ7kNvwHDlNcL&_nc_oc=AdoAR3YnZKWN0CaqJaxKM04QFJuLaaecspA5R42elhmHSU-sbA1uc_yRBYpyIZgFgXU&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=2qxg6swy9BX1pe5CqE70dQ&_nc_ss=72689&oh=00_AQLD0C6sz-T8hUNOkl5oEtiJERO6FIczHlzwIMcoQpzJMg&oe=6AB44CF8',
  DcdpCg8jTQo:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/782253620_17905311312499471_7150836352774984934_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=TmP3JF0DxukQ7kNvwGjCUXf&_nc_oc=AdrVsUAJf7VVAjFg2ZJDbURBX7DpbEo7Kf5Cz6fZdeX44aBcTbXaVvYKQBN-d-FetWs&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=9w8FvCnKpe51Ml6uAu5plQ&_nc_ss=72689&oh=00_AQKr3SbiHq9WLkKJqzbirMBh6PUTHqJNB_0lFqRo6Wdb1A&oe=6AB438C7',
  'DcbEI-SErRr':
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/786768657_17905179435499471_7362530031865658044_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=I8ZfqP6QBgsQ7kNvwG1Usa4&_nc_oc=AdqdDHLxfSxjN_qzJQG1dheQbzlvDiTNYQ1GbUIy_gIXBh8a7jzPhM9fXpNYWpdbDJY&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=dIiEMeBz6Z0IsJ1OVfJ_xg&_nc_ss=72689&oh=00_AQL1GDhZiFjwb-eEVMe6vXrvbU0aUekHeZQ5Hrp7W0PiaQ&oe=6AB4214B',
  DcXkXJYgh3A:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/784790450_17904986031499471_144680057906361954_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=sVNRbbMpQOUQ7kNvwErRFDE&_nc_oc=AdpRtdAVsbcc6uHnDmcm76RPcE-7ZtTMG5Y1RZw-dFOBRluBH2BJwPxwEEzgScuPxT8&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=T8G_cYYhGHVMrNmmdO292g&_nc_ss=72689&oh=00_AQJeUE8rIqbHIyeJagtsje6r16NgXbnuKSx62QDgtUwKRg&oe=6AB41DCA',
  DcU_hAbjNCU:
    'https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/781459549_17904841827499471_3336285060186319519_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=qFYgcqhdUJMQ7kNvwGakT5g&_nc_oc=Adrj8FdkM_osY5WP7hZ9u0B5OLduJHQ9eZBayZMqDC6g0QkJ8im4MfQSCdlNHO-cOZs&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_gid=3egvIyMcSgjUvXrB6HgCOw&_nc_ss=72689&oh=00_AQLSqFOKr9dYJCU84rc4I_7aTMJIePRdz931sqRnTIKd_g&oe=6AB43C03',
  DcTVwb_Dfaw:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/780487064_17904752130499471_7170164113264497523_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=kjuTHhdin-oQ7kNvwGFlSVi&_nc_oc=AdovIyE40nZN7AsFw7rKzOkmlc41qbCAC2VvyZqJ4ZCB_loUMtCM5i-1SAVlXMqeP0Y&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=_hb_XtdT2TThOva2VKFqTA&_nc_ss=72689&oh=00_AQKc0rlyPLjxW5sxEslyAr81CzkJHDvP0x-ic-4P2v1BSA&oe=6AB41E89',
  DcQlrkgBMh5:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.71878-15/775336723_1066590022574787_7952357917792571262_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=E77bbK99DdAQ7kNvwEIqEp0&_nc_oc=AdqHS8tQa2QciOCI2Ji-JhDlw4Md9wHsGejNIydxGytWDFg7wNIuDW3YE4H3mvU2WUE&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=obiZaKZQY1281GqbtjMTCg&_nc_ss=72689&oh=00_AQKbR_ENowX-_Pnznzipy1J6qEM88h-fkJ4B0AuokyCSeQ&oe=6AB41FDC',
  DcN_4N7AckJ:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/780771664_17904424197499471_6415524484134271817_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=7bpJNKoQeQAQ7kNvwFhusH5&_nc_oc=AdoA04QeFAsr3TQOfZU8R8cuknBnQRmlU-rZIrdPQa-GCv_4ANheQcQFqJjcqJ7Y7_0&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=sdA747tZPx499u9RYYWhWA&_nc_ss=72689&oh=00_AQL2ks5Xl8AtZA387BbkohM4Wtn5qngNx5GxgMY_vXvtfw&oe=6AB448DC',
  DcLa_U8k8jI:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/776163551_17904238668499471_5887484387079811569_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=wBrBgTetd_4Q7kNvwGobBII&_nc_oc=AdrQ2hQ33cnGThtP7SiUW0onmwSLe0AVD1Qm_jMLvRvOU1c59_emAKzu9uLxXn8P8pk&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=sT9PKjOrfEbmUC_X5UBzwQ&_nc_ss=72689&oh=00_AQJO1EeDVwrOhZazyUPDVUTWVcrhNAr2FSjeXdo2ytUeOQ&oe=6AB449BB',
  DcI2IQhDW0t:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/778899173_17904067515499471_3643949953253908029_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=i0loEhKwVWgQ7kNvwG5AUof&_nc_oc=Ado_c9uvks6cj5ogqZZKS1qzEfYBkYqX7FbjSg5tbQoRaM_bKMpRv9CVPdTHHvUvLng&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=zXHpgTvrTcbo7eJFt9t2mQ&_nc_ss=72689&oh=00_AQIJ9OBnb4e1BaT9d49PYGXkJDeKGP2lygFv5ZgFgVG-Gw&oe=6AB43A53',
  DcGymrADn6f:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/778226505_17903925279499471_135933001583871617_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=Ihmjq79l498Q7kNvwGvk8C2&_nc_oc=AdpfKSIa0nLBff1iI3ZX16lRLeKEEqrTHS0rfvsH_6mfSEDBKRCx1pHdqDssCTjINUU&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=IuXMmV7u_YhFLR2EC-313g&_nc_ss=72689&oh=00_AQLNYk0_goEyklVO18Yfqu81_WdxX94qep1NNOrWCaCfDg&oe=6AB436E4',
  Db2zfbQACNo:
    'https://scontent-bom2-4.cdninstagram.com/v/t51.82787-15/772713135_17902889838499471_9003999732827415612_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=TzDw6SVBQB0Q7kNvwHE2Qox&_nc_oc=AdrVwwmHhH2EAyrMvm9ZzHvgzSp3y5glSB-H6TOzgDYYRiR54gjWVkNUS08niDjlQyA&_nc_zt=23&_nc_ht=scontent-bom2-4.cdninstagram.com&_nc_gid=y9le6cvvqjZzmGckM8KVmA&_nc_ss=72689&oh=00_AQKVfRFWue8-GsEfcCcMm19rZDJJEv1PM71iSqzdSi0dwQ&oe=6AB42FE3',
  'DbzJ-AfiIu8':
    'https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/769839311_17902668504499471_8775669431651119532_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=hs7t9Kkjzt8Q7kNvwE5DntY&_nc_oc=AdoPa7FVIM_YFJ0ZYmrfvKgIcFJ_QVCMzjVXpTHaCKASvL_iW5bIZcHWrfxJh9sziR0&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_gid=9U0lJ-2K9IZUTxWWSeMiew&_nc_ss=72689&oh=00_AQJQxaAEn7rGmkqwHeaEQup62AGn7cPNUgj7cJZ0snAGng&oe=6AB426EA',
  DbvFAUyk2kJ:
    'https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/765929084_17902435830499471_4662370194587869108_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=lAj4u_A81hUQ7kNvwG66tk2&_nc_oc=AdqPvSKh0mGM3pTycA1UG7DQ2-khA7zg9ni5W5ncLJnMaSon2tAQqnZLba-x01RLjk4&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_gid=AI9uo6Vh0XyLH6k_WHHj8w&_nc_ss=72689&oh=00_AQLTkbpj3-1cahia02eIcRVCmEwhhNH3mZOsaNE-e16Tyg&oe=6AB43A55',
  DbrUxZSjzZy:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/764937777_17902173651499471_1924964165264150856_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=O_elcxelNecQ7kNvwECi1zg&_nc_oc=AdrAW0FMcqdWJEAgZC9l1oz9src-hiZSQ1R5_zJHDviSZImt-QtURWruc-rYwjaHmtk&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=iHwBO7xBg029cDr8jfyS9Q&_nc_ss=72689&oh=00_AQIhqTphIgUC7Xi0jertWJy7RR__bxBQDbcka7DfAuZWlw&oe=6AB435C4',
  DbqekBqiqJs:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/767389470_17902126332499471_6597928311354982125_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=EYEx_vGKq04Q7kNvwHYqSn5&_nc_oc=Adpf6pGs0qZNTCXnWcul6-p25_WF7IgF2GlPSs3xVxYeIPARM8yy2paRgXwI4oKW3OA&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=G_OabJmn_eonWfbr9J564A&_nc_ss=72689&oh=00_AQKEvoUAelBNt6EFzdL-d77TxTY1IznbRUb0W7ZpUfxmGQ&oe=6AB41BB3',
  Dbp7cYDFIXI:
    'https://scontent-bom2-4.cdninstagram.com/v/t51.82787-15/767772297_17902088694499471_8856808595199440537_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=8sqsZ0rHLZwQ7kNvwF4ztB8&_nc_oc=AdqMYhXfs2O48AwKf9PMWTDIzhx1KP_48w06EQy06fy4OHUwYJ0nMgDW0VvtjSQ_D2A&_nc_zt=23&_nc_ht=scontent-bom2-4.cdninstagram.com&_nc_gid=5FWlMM7c1ma65BdvPBb7rw&_nc_ss=72689&oh=00_AQLPAZzVv6eQYiYgtaTRiJgnG43XbfUwrcdVSLHXa9GCeA&oe=6AB42231',
  DbnywLylOsL:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/764072059_17901967209499471_2445394881910364365_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=L05jJPdB_I4Q7kNvwEke1Mh&_nc_oc=AdqLDj2Na9yh4a4WFh0HyxXrd-5l0xgA83tmki9kpyhyLXhBGCVLIqDtjLDgQsZGdcs&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=idUGGl6ABeSah_lfblN4_w&_nc_ss=72689&oh=00_AQJMtOSoMeUa9VAKbANi9CctRZAbhfkkp2H0A_8dobSuCA&oe=6AB41869',
  DbntEr5CUJU:
    'https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/764389540_17901959751499471_3170742959417983712_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=E9ZiSAiF41wQ7kNvwE1Yy1v&_nc_oc=AdoxllKeqHAdJuZM78UXxaQJOq12jp_B7MNJDMWXxQAtgSq98lcqXFiOZcFjIzp_c-Y&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_gid=oUr4rkMQAzR1UunGjiQR4g&_nc_ss=72689&oh=00_AQJG6Sb8xJTPFy7MpdvK34aFZiu_-bFHwpLDL18bKq7e8Q&oe=6AB42A1F',
  DbmOlEsiZnG:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/765620382_17901872016499471_6633014563034320794_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=qs7LT81EnWEQ7kNvwGvOCjR&_nc_oc=Adq6agQWV75hm8KFMaGakdVYjPxrEjLKtbPgimTzZmyyn8BHr7Z1SVJkhltgI8hU5MM&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=bCaxhQw7hbJjiBfMcDffZg&_nc_ss=72689&oh=00_AQJa7nUlug19exE_UY6ZkoTkv3G1i-ubcbaRxYA-K948Fg&oe=6AB42D58',
  DbmLKAfEgw4:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/765198485_17901869421499471_3420447030652275646_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=sW3AUDLd1wYQ7kNvwEnOEDI&_nc_oc=AdqEzv4fLmet-dahL6EmIqOVF4OVn-4L5X8gb3ylDhxyVHq1IgS8EO-xBZFvUVeb8-I&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=qXvRQl5qRgL7E_PSKQVnZw&_nc_ss=72689&oh=00_AQJZqMZ-3Gp4-8zIu1Zbo5wHnGxfyLiWH8O8FrtDo1mnpA&oe=6AB4234B',
  Dbkx1ZVDgGT:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/763334796_17901786474499471_128956857470415891_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=_F6KvbtSNHAQ7kNvwFFxWQV&_nc_oc=AdrtijWFadeiHtJQTIe3mxBZbIFqef-R7uIBNAFfTLOyaOk_vrR-BzO69V1zyMRGMpk&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=_uaPgwsK-z6PNGyGPS1x5Q&_nc_ss=72689&oh=00_AQLdDzIFWeh0CLjn5Su_-WvqxHrmoaVc_rlzySEcdRCO5g&oe=6AB42570',
  'DbjtO-vlPHi':
    'https://scontent-bom2-4.cdninstagram.com/v/t51.82787-15/763318963_17901722874499471_7829887209097811067_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=poqp0PXJNogQ7kNvwGBgU7v&_nc_oc=Adr9cvC-hPLosNxhT3mg8XVZHRvoe6NsgjyB4UkK0qLd847OnpCqugbBcw49Vl0-o60&_nc_zt=23&_nc_ht=scontent-bom2-4.cdninstagram.com&_nc_gid=6R-24kXido2iz_x0uHz-Eg&_nc_ss=72689&oh=00_AQI9t5j6vx7rUalM5LmlnUyfPH5e_FJHD1FKsyoL1rfdwA&oe=6AB4384F',
  DbihpvnjyyX:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/760899695_17901649761499471_5507887911856644379_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=vGIRK0wui8sQ7kNvwGZFZlJ&_nc_oc=AdpmLyhajDsASsj4YcB_L4_ue5fDeHKfPJ16IcoBHx_m8N_OC1wwIiL2R76uAlP0HSk&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=ANzC-bwiVx77JLspzI1ihw&_nc_ss=72689&oh=00_AQK26fhxKSL28_GrqdSMzBonu9snN-xl3A1oRHR_8hypPQ&oe=6AB41E59',
  DbiNDKqjYB8:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/763248977_17901624060499471_4760594931370363528_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=3grOR7FQregQ7kNvwFGGaXR&_nc_oc=AdoJTF-hqHCN80m0HQ2l0g8CdnvndBAf503Zr8kbBlPMt96YKwFuR78IXDDQcas3B1M&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=-sNU91COTL1BcXBggue9tA&_nc_ss=72689&oh=00_AQJrxC1dL5XW3Gb6tvwC4gpj0cjLRYAQ9L0-npaqJ6eyYQ&oe=6AB44380',
  DbhBffXCkvi:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/758426882_17901541314499471_4168916769996709837_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=Sm3NwkoAXsMQ7kNvwE_en-2&_nc_oc=AdrklJHBAnGIY3XDhdgnrhWcuMe7iHx3qku0G8um9-3fcI9OPMw71glAc6REFZXYbmk&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=PEmwJfGl51ntXQ3k5etlLA&_nc_ss=72689&oh=00_AQJldDg96oCyNySNowojhAm_yp8i7EkQ-lJEqWLi0XYYqQ&oe=6AB42325',
  Dbf80j0jHwG:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/762864362_17901468657499471_7684392660089482967_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=TlQskmSrGQ0Q7kNvwHOEqhS&_nc_oc=Adrx2skaTmImmpopMLGtNIHDGhWnkR-W-nQfqNtxQOFkrjHpkTNPUCROlymGFCLE1OM&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=og7bRV6t1tY1J19d_Of_Eg&_nc_ss=72689&oh=00_AQLUAWXpZaw-D5WxDnLGz-EcozzFxod-V-3cRBLoDQBXoA&oe=6AB41A18',
  DbfoSdyjP5Z:
    'https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/762864197_17901445746499471_73758843368920560_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=yfvNQ2WI54IQ7kNvwH5pYR_&_nc_oc=Adq7NIFF9zmbQV4OYJpYePufTEDKqpUG1c9l30ATo_mXuApzZaw6yIWTIEicfjhMOC8&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_gid=TywHj7cuiCgI1ws6AsmgyA&_nc_ss=72689&oh=00_AQIWUmYgT0CKtlIq-V6BXa26COYekTJDJTyb3MwtJYpGYQ&oe=6AB44FF0',
  DbfMdIRDCck:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/758426880_17901420900499471_2667582958036103622_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=SkafrmSBgmoQ7kNvwFmmZWl&_nc_oc=Adr7HpinVO1GaaWg3PB6oP21WxgjcFAYXjd59AI1XH5udCT-7sw2I6y9tlapn4OXsiE&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=W56dFjzfK_xhObe3hwDt5A&_nc_ss=72689&oh=00_AQIqvfEoqOX-lR8ronXBpEeJE7zflZl38In12bwAP55E2g&oe=6AB41A05',
  DbfF5EKAgfY:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/756436518_17901415497499471_2003081393972248087_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=WOSP0FyaQ68Q7kNvwF36Dne&_nc_oc=AdrwnFOE_Q_2AZL7OCdNGWo8Z55QY9tPR2pVd4s_1bApI2pzUzSlw1u94j6L9D4sw3s&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=VnGXQ_DtL14uIVGy3Rc_bw&_nc_ss=72689&oh=00_AQKNIa9LdMkaf7hAbhuq8h_sg604jVI8zhBmzAYNJqW-5Q&oe=6AB43104',
  Dbect4nFIx8:
    'https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/757937124_17901374751499471_502227872579541469_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=A33jnL0d3WsQ7kNvwFZ5nnh&_nc_oc=AdqQFZ95K_dpERoGYCxr5Pou4GkTd_S8xpQ7Z2XvKt_9mUWu_z_o_LVzHh_pQUySPGc&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_gid=aPAhxnKAn_eWHGXIhabLcg&_nc_ss=72689&oh=00_AQKb-vkm7vVxKxBRf2j34EMyYfCn1lux2jS_59e-UgN9Bw&oe=6AB44BF4',
  DbcJ9_ZlqM3:
    'https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/757969576_17901222780499471_3211745102692005055_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=kY-6EvnmpdMQ7kNvwEsdsK-&_nc_oc=AdpRzSMVQBU0lKCI1o8U2IEC3kmOHowal7hhjMBZKcRWfoRRUgnAcrNMvwvOhJM2ZpQ&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_gid=576kGtAMJ5cjqnVZwZZA7w&_nc_ss=72689&oh=00_AQKZC11cPoPzWPNe0cdNsK8inHpBBaXKXkSTAc5oc2Vy3w&oe=6AB41D16',
  DbcGyW7lA5L:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/759698369_17901218901499471_765570922809343972_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=2duD6OwWMqkQ7kNvwFa4fZ5&_nc_oc=AdrwXhm4nygPcXfs3RX1Xzs1dPcKhNriKW88KALdMDLPRvwOx7yr5_7LVxcNWn5zdQ4&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=dhxzdhIetbuQRkDsvovstQ&_nc_ss=72689&oh=00_AQLk2DxC5fHM5BUDribvL1WwKfxnNrb2DwA99MNsZdf6MA&oe=6AB41A54',
  DbZaiLGgrve:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/757699077_17901052743499471_60040323975144647_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=XcM_7TCD5SIQ7kNvwE9cUwJ&_nc_oc=AdpiKb5_qYEff_oMSyG7rRxJ8DXOYfAVv9mjygOqxc_MhvYfiptZZRQihnWJUJEuGjE&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=L79-yXfJAgnW0SqNM-pAnA&_nc_ss=72689&oh=00_AQKsDTuU9UUCAB3h4l77f4yxTRa2HcZ7oiP35UNo7Ks4lQ&oe=6AB44E84',
  DbZTMH0iTpx:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/758456010_17901046770499471_6969907255725175427_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=iBeLA-4ne30Q7kNvwFNED2A&_nc_oc=AdofTekiNO6XXmuvRr9muVw7Y5XKoen78Bf44qZ2yEuAaYzR3BuqUEgcjgLo22Znme8&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=xtjThIk7fUZI9SQPgGKsbQ&_nc_ss=72689&oh=00_AQL-rcvLgDUkdCRBfllwz3Qs6r5qBxPkxNNfM62g6cMPlA&oe=6AB42219',
  DbYOgbDCIdo:
    'https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/757454998_17900976393499471_5605611302597196781_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=KHltWtWzp7IQ7kNvwG0iUHH&_nc_oc=AdrQrZ-jidctIoaZ_GyRqxT-Ie44KURAX_-F6eSP32mcwVmBhfSciRrxGr39KZQUDHo&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=Cosile4kw8Mtz7t-BFYtYg&_nc_ss=72689&oh=00_AQKL4-AHKPlEbo0TM3IAh0IQEWiy7-T3GY_T_oPTYOx33A&oe=6AB44C3D',
  DbW8fDtFYns:
    'https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/757656723_17900899737499471_1991111798059813959_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=DLIbRnJJ-9gQ7kNvwG7kzTk&_nc_oc=Adq7f2wupZergmwSpXSz2zrqlDRN0BrjEvxB_Pbd0R7AUjmN3XBwJqUcJdytrq8m8f8&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_gid=aP1Vg8Dj4CcOVb8FUdODSw&_nc_ss=72689&oh=00_AQJDqu4SPjGPEO2p6oKG8zjuNx8UvjbZQe0bAY__ewLFZQ&oe=6AB4282B',
  DbW52SjjMT4:
    'https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/758744433_17900896770499471_1733265294590651021_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=WtIjHHTO3vgQ7kNvwFJXNFg&_nc_oc=AdpA1y2ytG4UsAZwO1bFZgO1LIvvYHxEiatpOz0QsHxKiEDceHqARZRlDTT75iBj1SU&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_gid=JWcZU2_ekIj5aqpheBKBUw&_nc_ss=72689&oh=00_AQLiYYO0JWB01H8xGrcgaGt4L0_A52qtu5iwBqXy29lPQQ&oe=6AB437FC',
  DbUNBtUDOyj:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/759421677_17900739324499471_3722746841330107609_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=nmQEaeUtyxkQ7kNvwFLK5Vy&_nc_oc=AdqJy3dJN_jzU37qKB-dhiIaVfR_0-CWj8TqyBpbnymZQz2xOe9PAEyxdHiqwbXnBrQ&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=LNj_qfhJl5PuWyaEddKyiA&_nc_ss=72689&oh=00_AQLp4RekDYjaRKKkX6Ms3eeBt0hB0mY50U5XvA68t6pC3w&oe=6AB44788',
  DbUJgOWkhXr:
    'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/757507615_17900736561499471_6227084708886739322_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=t85diOCq1RYQ7kNvwGoKjTo&_nc_oc=AdozW4UAWZjKmCSYYohiR4MaQEP3PsKrKiCVrIhTuAcDdZqbBuBl8pzwb7yIdVfNckY&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=ZBb_tYl_fHLurTdU3cxNKQ&_nc_ss=72689&oh=00_AQKMuGNP3vVct-pA5neDDctJrIcOY3CHH4_fan5MgGD2JA&oe=6AB4296F',
};

const instagramReels: MediaItem[] = [
  {
    title: 'Ganesh Chaturthi blessings and festival joy',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DdbuYWrhAGV'),
    summary: 'A festive BhummiVastu reel sharing Ganesh Chaturthi blessings, happiness, and togetherness.',
    published: 'September 2026',
    sortOrder: 52,
    views: 472,
  },
  {
    title: 'Ganesh Chaturthi 2026 pooja vidhi',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DdOR59qj9Pl'),
    summary: 'A concise guide to the Ganesh Chaturthi 2026 pooja vidhi from BhummiVastu.',
    published: 'September 2026',
    sortOrder: 51,
    views: 72,
  },
  {
    title: 'Paryushan Samvatsari 2026: forgiveness and reflection',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DdAS_LHDI0D'),
    summary: 'A Paryushan Samvatsari 2026 message about reflection, forgiveness, and peace.',
    published: 'September 2026',
    sortOrder: 50,
    views: 65,
  },
  {
    title: 'Krishna Janmotsav celebrations',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dc78fNHh8kU'),
    summary: 'A devotional BhummiVastu reel celebrating Krishna Janmotsav.',
    published: 'September 2026',
    sortOrder: 49,
    views: 765,
    featured: true,
  },
  {
    title: 'Janmashtami celebration and blessings',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dc2qPyPkcA_'),
    summary: 'A Janmashtami celebration reel with devotional wishes from BhummiVastu.',
    published: 'September 2026',
    sortOrder: 48,
    views: 240,
  },
  {
    title: 'September 2026 numerology: Number 2 and the Moon',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcydsEMDDbw'),
    summary: 'A September 2026 numerology forecast for Number 2 and Moon energy.',
    published: 'September 2026',
    sortOrder: 47,
    views: 315,
  },
  {
    title: 'September 2026 numerology: Number 1 and the Sun',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcvyvDWCWsY'),
    summary: 'A September 2026 numerology forecast for Number 1 and Sun energy.',
    published: 'September 2026',
    sortOrder: 46,
    views: 92,
  },
  {
    title: 'Astro-Vastu site visit',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DctJrNHhh9E'),
    summary: 'A BhummiVastu site visit featuring Astro-Vastu and Vedic astrology expertise.',
    published: 'September 2026',
    sortOrder: 45,
    views: 1703,
    featured: true,
  },
  {
    title: 'Janmashtami midnight and an Astro-Vastu tip',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dcpl55nDamD'),
    summary: 'A Janmashtami midnight message with a practical Astro-Vastu tip.',
    published: 'August 2026',
    sortOrder: 44,
    views: 72,
  },
  {
    title: 'Chappan Bhog, Dahi Handi, and a food-health tip',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcnBFY7CFVV'),
    summary:
      'A Janmashtami-themed reel connecting Chappan Bhog and Dahi Handi with an Astro-Vastu food and health tip.',
    published: 'August 2026',
    sortOrder: 43,
    views: 166,
  },
  {
    title: 'Vasudev and Krishna: a Janmashtami insight',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DclXZcIiKdS'),
    summary: 'A devotional story about Vasudev and Krishna paired with an Astro-Vastu insight.',
    published: 'August 2026',
    sortOrder: 42,
    views: 124,
  },
  {
    title: 'Janmashtami 2026 pooja vidhi',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DciygwEDnLn'),
    summary: 'A BhummiVastu guide to the Janmashtami 2026 pooja vidhi.',
    published: 'August 2026',
    sortOrder: 41,
    views: 147,
  },
  {
    title: 'BhummiVastu Instagram Reel — 40',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcgNva2jvtH'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 40,
    views: 243,
  },
  {
    title: 'BhummiVastu Instagram Reel — 39',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcdpCg8jTQo'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 39,
    views: 1548,
    featured: true,
  },
  {
    title: 'BhummiVastu Instagram Reel — 38',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcbEI-SErRr'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 38,
    views: 169,
  },
  {
    title: 'BhummiVastu Instagram Reel — 37',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcXkXJYgh3A'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 37,
    views: 273,
  },
  {
    title: 'BhummiVastu Instagram Reel — 36',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcU_hAbjNCU'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 36,
    views: 1280,
    featured: true,
  },
  {
    title: 'BhummiVastu Instagram Reel — 35',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcTVwb_Dfaw'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 35,
    views: 516,
  },
  {
    title: 'BhummiVastu Instagram Reel — 34',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcQlrkgBMh5'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 34,
    views: 930,
    featured: true,
  },
  {
    title: 'BhummiVastu Instagram Reel — 33',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcN_4N7AckJ'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 33,
    views: 69,
  },
  {
    title: 'BhummiVastu Instagram Reel — 32',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcLa_U8k8jI'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 32,
    views: 159,
  },
  {
    title: 'BhummiVastu Instagram Reel — 31',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcI2IQhDW0t'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 31,
    views: 79,
  },
  {
    title: 'BhummiVastu Instagram Reel — 30',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcGymrADn6f'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 30,
    views: 48,
  },
  {
    title: 'BhummiVastu Instagram Reel — 29',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Db2zfbQACNo'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 29,
    views: 456,
  },
  {
    title: 'BhummiVastu Instagram Reel — 28',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbzJ-AfiIu8'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 28,
    views: 56,
  },
  {
    title: 'BhummiVastu Instagram Reel — 27',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbvFAUyk2kJ'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 27,
    views: 1480,
    featured: true,
  },
  {
    title: 'BhummiVastu Instagram Reel — 26',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbrUxZSjzZy'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 26,
    views: 142,
  },
  {
    title: 'BhummiVastu Instagram Reel — 25',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbqekBqiqJs'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 25,
    views: 272,
  },
  {
    title: 'BhummiVastu Instagram Reel — 24',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dbp7cYDFIXI'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 24,
    views: 175,
  },
  {
    title: 'BhummiVastu Instagram Reel — 23',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbnywLylOsL'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 23,
    views: 53,
  },
  {
    title: 'BhummiVastu Instagram Reel — 22',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbntEr5CUJU'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 22,
    views: 398,
  },
  {
    title: 'BhummiVastu Instagram Reel — 21',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbmOlEsiZnG'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 21,
    views: 136,
  },
  {
    title: 'BhummiVastu Instagram Reel — 20',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbmLKAfEgw4'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 20,
    views: 121,
  },
  {
    title: 'BhummiVastu Instagram Reel — 19',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dbkx1ZVDgGT'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 19,
    views: 141,
  },
  {
    title: 'BhummiVastu Instagram Reel — 18',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbjtO-vlPHi'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 18,
    views: 367,
  },
  {
    title: 'BhummiVastu Instagram Reel — 17',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbihpvnjyyX'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 17,
    views: 68,
  },
  {
    title: 'BhummiVastu Instagram Reel — 16',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbiNDKqjYB8'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 16,
    views: 131,
  },
  {
    title: 'BhummiVastu Instagram Reel — 15',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbhBffXCkvi'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 15,
    views: 137,
  },
  {
    title: 'BhummiVastu Instagram Reel — 14',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dbf80j0jHwG'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 14,
    views: 121,
  },
  {
    title: 'BhummiVastu Instagram Reel — 13',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbfoSdyjP5Z'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 13,
    views: 134,
  },
  {
    title: 'BhummiVastu Instagram Reel — 12',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbfMdIRDCck'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 12,
    views: 24,
  },
  {
    title: 'BhummiVastu Instagram Reel — 11',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbfF5EKAgfY'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 11,
    views: 366,
  },
  {
    title: 'BhummiVastu Instagram Reel — 10',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dbect4nFIx8'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 10,
    views: 145,
  },
  {
    title: 'BhummiVastu Instagram Reel — 9',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbcJ9_ZlqM3'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 9,
    views: 332,
  },
  {
    title: 'BhummiVastu Instagram Reel — 8',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbcGyW7lA5L'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 8,
    views: 334,
  },
  {
    title: 'BhummiVastu Instagram Reel — 7',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbZaiLGgrve'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 7,
    views: 229,
  },
  {
    title: 'BhummiVastu Instagram Reel — 6',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbZTMH0iTpx'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 6,
    views: 190,
  },
  {
    title: 'BhummiVastu Instagram Reel — 5',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbYOgbDCIdo'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 5,
    views: 118,
  },
  {
    title: 'BhummiVastu Instagram Reel — 4',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbW8fDtFYns'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 4,
    views: 27,
  },
  {
    title: 'BhummiVastu Instagram Reel — 3',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbW52SjjMT4'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 3,
    views: 183,
  },
  {
    title: 'BhummiVastu Instagram Reel — 2',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbUNBtUDOyj'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 2,
    views: 23,
  },
  {
    title: 'BhummiVastu Instagram Reel — 1',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbUJgOWkhXr'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 1,
    views: 185,
  },
];

const additionalMedia: MediaItem[] = [
  {
    title: 'BhummiVastu Facebook Reel',
    platform: 'Facebook',
    type: 'Reel',
    url: 'https://www.facebook.com/reel/1638325130651200',
    embedUrl:
      'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1638325130651200&show_text=false',
    summary: 'Watch the original BhummiVastu reel on Facebook.',
    sortOrder: 0,
  },
  {
    title: 'BhummiVastu Facebook Reel',
    platform: 'Facebook',
    type: 'Reel',
    url: 'https://www.facebook.com/reel/1554778962289569',
    embedUrl:
      'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1554778962289569&show_text=false',
    summary: 'Watch the original BhummiVastu reel on Facebook.',
    sortOrder: -1,
  },
  {
    title: 'BhummiVastu Facebook Post',
    platform: 'Facebook',
    type: 'Post',
    url: 'https://www.facebook.com/share/p/1AUWazDja5/',
    embedUrl:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fp%2F1AUWazDja5%2F&show_text=true',
    summary: 'Open the original BhummiVastu post on Facebook.',
    sortOrder: -2,
  },
  {
    title: 'BhummiVastu YouTube Short',
    platform: 'YouTube',
    type: 'Short',
    url: 'https://youtube.com/shorts/PReklrVQ48k?si=0pryJoadpJRc9Ok5',
    summary: 'Watch the original BhummiVastu Short on YouTube.',
    sortOrder: -3,
  },
];

export const mediaItems: MediaItem[] = [...instagramReels, ...additionalMedia].sort(
  (a, b) => b.sortOrder - a.sortOrder
);

export const featuredMedia = mediaItems.filter((item) => item.featured).sort((a, b) => (b.views ?? 0) - (a.views ?? 0));

export function getYouTubeId(url: string): string | undefined {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.split('/').filter(Boolean)[0];
    }

    if (parsed.pathname.startsWith('/shorts/')) {
      return parsed.pathname.split('/')[2];
    }

    const watchId = parsed.searchParams.get('v');
    if (watchId) return watchId;
  } catch {
    return undefined;
  }

  return undefined;
}

export function getEmbedUrl(item: MediaItem): string | undefined {
  if (item.embedUrl) return item.embedUrl;

  if (item.platform === 'Facebook') {
    const encoded = encodeURIComponent(item.url);
    if (item.type === 'Post') {
      return `https://www.facebook.com/plugins/post.php?href=${encoded}&show_text=true`;
    }

    return `https://www.facebook.com/plugins/video.php?href=${encoded}&show_text=false`;
  }

  if (item.platform === 'Instagram') {
    try {
      const shortcode = new URL(item.url).pathname.split('/').filter(Boolean)[1];
      return shortcode ? `https://www.instagram.com/reel/${shortcode}/embed` : undefined;
    } catch {
      return undefined;
    }
  }

  return undefined;
}

export function getThumbnailUrl(item: MediaItem): string | undefined {
  if (item.platform !== 'Instagram') return undefined;

  try {
    const shortcode = new URL(item.url).pathname.split('/').filter(Boolean)[1];
    return shortcode ? instagramThumbnails[shortcode] : undefined;
  } catch {
    return undefined;
  }
}
