import * as React from "react";

const NullIcon = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M13 3H3V13H13V3ZM12 4.70711L4.70711 12H6.29289L12 6.29289V4.70711ZM12 7.70711L7.70711 12H9.29289L12 9.29289V7.70711ZM12 10.7071L10.7071 12H12V10.7071ZM4 11.2929L11.2929 4H9.70711L4 9.70711V11.2929ZM4 8.29289L8.29289 4H6.70711L4 6.70711V8.29289ZM4 5.29289L5.29289 4H4V5.29289Z"
  />
);

const ChevronSouth = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M1.64648 5.35359L2.35359 4.64648L8.00004 10.2929L13.6465 4.64648L14.3536 5.35359L8.00004 11.7071L1.64648 5.35359Z"
  />
);

const ChevronWest = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10.6464 1.64648L11.3535 2.35359L5.70707 8.00004L11.3535 13.6465L10.6464 14.3536L4.29286 8.00004L10.6464 1.64648Z"
  />
);

const ChevronEast = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5.35359 14.3535L4.64648 13.6464L10.2929 7.99996L4.64648 2.35352L5.35359 1.64641L11.7071 7.99996L5.35359 14.3535Z"
  />
);

const ChevronNorth = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M14.3535 10.6464L13.6464 11.3535L7.99996 5.70707L2.35352 11.3535L1.64641 10.6464L7.99996 4.29286L14.3535 10.6464Z"
  />
);

const ArrowRefresh = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M7.9999 2.8999C5.18325 2.8999 2.8999 5.18325 2.8999 7.9999H1.8999C1.8999 4.63096 4.63097 1.8999 7.9999 1.8999C9.67778 1.8999 11.1975 2.57776 12.2999 3.67327V1.9999H13.2999V5.2999L9.9999 5.2999V4.2999L11.5099 4.2999C10.5952 3.43173 9.35976 2.8999 7.9999 2.8999ZM7.9999 13.0999C10.8166 13.0999 13.0999 10.8166 13.0999 7.9999H14.0999C14.0999 11.3688 11.3688 14.0999 7.9999 14.0999C6.32203 14.0999 4.80225 13.422 3.6999 12.3265V13.9999H2.6999V10.6999H5.9999V11.6999H4.48986C5.4046 12.5681 6.64004 13.0999 7.9999 13.0999Z"
  />
);

const ArrowExpand = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10.2929 5H8V4H12V8H11V5.70711L5.70711 11H8V12H4V8H5V10.2929L10.2929 5Z"
  />
);

const ArrowExternal = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M14 1H9V2H13.293L8.14648 7.14648L8.85359 7.85359L14 2.70718V7H15V2V1H14ZM7 3H2V14H13V9H12V13H3V4H7V3Z"
  />
);

const ArrowEast = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11.0355 7.5L7.64641 4.11092L8.35352 3.40381L12.9497 8L8.35352 12.5962L7.64641 11.8891L11.0355 8.5L3.75732 8.5L3.75732 7.5H11.0355Z"
  />
);

const ArrowSouth = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.5 11.0355L11.8891 7.64641L12.5962 8.35352L8 12.9497L3.4038 8.35352L4.11091 7.64641L7.5 11.0355L7.5 3.75732L8.5 3.75732V11.0355Z"
  />
);

const ArrowWest = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M4.9645 8.5L8.35359 11.8891L7.64648 12.5962L3.05029 8L7.64648 3.4038L8.35359 4.11091L4.9645 7.5L12.2427 7.5L12.2427 8.5L4.9645 8.5Z"
  />
);

const ArrowNorth = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M7.5 4.96438L4.11092 8.35347L3.40381 7.64636L8 3.05017L12.5962 7.64636L11.8891 8.35347L8.5 4.96438L8.5 12.2426L7.5 12.2426V4.96438Z"
  />
);

const ArrowNorthEast = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10.2963 5H5.00346V4L12.0035 4V11H11.0035V5.70711L4.85701 11.8536L4.1499 11.1464L10.2963 5Z"
  />
);

const ArrowSouthEast = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11 10.2965L11 5.00358L12 5.00358L12 12.0036L5 12.0036L5 11.0036L10.2929 11.0036L4.14645 4.85713L4.85355 4.15002L11 10.2965Z"
  />
);

const ArrowSouthWest = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5.70707 11L11 11L11 12L3.99996 12L3.99996 5L4.99996 5L4.99996 10.2929L11.1464 4.14645L11.8535 4.85355L5.70707 11Z"
  />
);

const ArrowNorthWest = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5 5.70707L5 11L4 11L4 3.99996L11 3.99996L11 4.99996L5.70711 4.99996L11.8536 11.1464L11.1464 11.8535L5 5.70707Z"
  />
);

const Locked = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11 7H12C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14H4C3.44772 14 3 13.5523 3 13V8C3 7.44772 3.44772 7 4 7H5V5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5V7ZM10 7V5C10 3.89543 9.10457 3 8 3C6.89543 3 6 3.89543 6 5V7H10ZM6 8H12V13H4V8H5H6Z"
  />
);

const Unlocked = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10 5C10 3.89543 9.10457 3 8 3C6.89543 3 6 3.89543 6 5V7H12C12.5523 7 13 7.44772 13 8V11V13C13 13.5523 12.5523 14 12 14H4C3.44772 14 3 13.5523 3 13V8C3 7.44772 3.44772 7 4 7H5V5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5H10ZM4 8H5H6H12V13H4V8Z"
  />
);

const Mail = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 4H3V12H13V4ZM2 3V13H14V3H2Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.26074 5.93893L2.73959 5.06104L8.00017 7.93044L13.2607 5.06104L13.7396 5.93893L8.00017 9.06953L2.26074 5.93893Z"
    />
  </>
);

const Copy = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.4999 4.29885L10.813 1.5L4.50002 1.50011L4.5 4.00007L5.5 4.00006L5.50001 2.5001L10.3868 2.50001L12.4999 4.70116V11.5H10.9999V12.5H13.4999V4.29885Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.81311 3.5L11.5 6.29885V14.5H2.5L2.50009 3.50011L8.81311 3.5ZM3.50008 4.5001L3.50001 13.5H10.5V6.70116L8.3869 4.50001L3.50008 4.5001Z"
    />
  </>
);

const MagnifyingGlass = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11 7.5C11 9.433 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5ZM10.3088 11.016C9.53901 11.6318 8.56251 12 7.5 12C5.01472 12 3 9.98528 3 7.5C3 5.01472 5.01472 3 7.5 3C9.98528 3 12 5.01472 12 7.5C12 8.56251 11.6318 9.53901 11.016 10.3088L13.3536 12.6464L12.6464 13.3536L10.3088 11.016Z"
  />
);

const ChevronDouble = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.00004 1.79285L4.14648 5.6464L4.85359 6.35351L8.00004 3.20706L11.1465 6.35351L11.8536 5.6464L8.00004 1.79285ZM4.85367 9.64648L4.14656 10.3536L8.00011 14.2071L11.8537 10.3536L11.1466 9.64648L8.00011 12.7929L4.85367 9.64648Z"
  />
);

const ChevronDoubleSmall = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.00004 3.79285L5.14648 6.6464L5.85359 7.35351L8.00004 5.20706L10.1465 7.35351L10.8536 6.6464L8.00004 3.79285ZM5.85367 8.64648L5.14656 9.35358L8.00011 12.2071L10.8537 9.35358L10.1466 8.64648L8.00011 10.7929L5.85367 8.64648Z"
  />
);

const Plus = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M7.5 8.5V13.5H8.5V8.5H13.5V7.5H8.5V2.5H7.5V7.5H2.5V8.5H7.5Z"
  />
);

const Checkmark = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12.3536 5.35359L6.50004 11.2071L3.64648 8.35359L4.35359 7.64648L6.50004 9.79293L11.6465 4.64648L12.3536 5.35359Z"
  />
);

const CheckmarkBold = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12.5304 5.53039L6.50006 11.5607L3.46973 8.53039L4.53039 7.46973L6.50006 9.4394L11.4697 4.46973L12.5304 5.53039Z"
  />
);

const Minus = () => (
  <path fillRule="evenodd" clipRule="evenodd" d="M13.5 8.5H2.5V7.5H13.5V8.5Z" />
);

const X = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M7.29289 7.99995L3.75747 11.5354L4.46458 12.2425L8 8.70706L11.5355 12.2426L12.2426 11.5355L8.70711 7.99995L12.2428 4.46431L11.5356 3.7572L8 7.29285L4.46443 3.75728L3.75732 4.46438L7.29289 7.99995Z"
  />
);

const ExclaimationMark = () => (
  <path d="M8.58008 3.27273L8.49485 9.54545H7.50621L7.42099 3.27273H8.58008ZM8.00053 12.0682C7.79031 12.0682 7.60991 11.9929 7.45934 11.8423C7.30877 11.6918 7.23349 11.5114 7.23349 11.3011C7.23349 11.0909 7.30877 10.9105 7.45934 10.7599C7.60991 10.6094 7.79031 10.5341 8.00053 10.5341C8.21076 10.5341 8.39116 10.6094 8.54173 10.7599C8.69229 10.9105 8.76758 11.0909 8.76758 11.3011C8.76758 11.5114 8.69229 11.6918 8.54173 11.8423C8.39116 11.9929 8.21076 12.0682 8.00053 12.0682Z" />
);

const Bullet = () => <circle cx="8" cy="8" r="3" />;

const LargeBullet = () => <circle cx="8" cy="8" r="5" />;

const Circle = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
  />
);

const Ellipsis = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M2 7H4V9H2V7ZM7 7H9V9H7V7ZM14 7H12V9H14V7Z"
  />
);

const Star = () => (
  <path d="M8 3L9.46946 5.97746L12.7553 6.45492L10.3776 8.77254L10.9389 12.0451L8 10.5L5.06107 12.0451L5.62236 8.77254L3.24472 6.45492L6.53054 5.97746L8 3Z" />
);

const TriangleEast = () => <path d="M12 8L5 12L5 4L12 8Z" />;

const TriangleSouth = () => <path d="M8 12L4 5L12 5L8 12Z" />;

const TriangleWest = () => <path d="M4 8L11 12L11 4L4 8Z" />;

const TriangleNorth = () => <path d="M8 4L4 11L12 11L8 4Z" />;

const CreateGroup = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M3.5 8C3.5 5.51472 5.51472 3.5 8 3.5V2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8H12.5C12.5 10.4853 10.4853 12.5 8 12.5C5.51472 12.5 3.5 10.4853 3.5 8ZM10 3H11V5H13V6H11V8H10V6H8V5H10V3Z"
  />
);

const Color = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14C10.7614 14 13 11.7614 13 9C13 6.91443 11.7433 5.16289 10.3243 3.86215C9.62771 3.22364 8.92699 2.72683 8.39911 2.38957C8.25008 2.29436 8.11566 2.21239 8 2.14404C7.88434 2.21239 7.74992 2.29436 7.60089 2.38957C7.07301 2.72683 6.37229 3.22364 5.67572 3.86215C4.25674 5.16289 3 6.91443 3 9C3 11.7614 5.23858 14 8 14ZM7.55158 1.89382L7.55154 1.8938ZM14 9C14 12.3137 11.3137 15 8 15C4.68629 15 2 12.3137 2 9C2 4 8 1 8 1C8 1 14 4 14 9Z"
    />
    <path d="M14 9C14 12.3137 11.3137 15 8 15V1C8 1 14 4 14 9Z" />
  </>
);

const Blank = () => <path />;

const ExclaimationMarkBold = () => (
  <path d="M8.82872 3.27271L8.6881 9.43464H7.31594L7.17957 3.27271H8.82872ZM8.00202 12.0937C7.74349 12.0937 7.5219 12.0028 7.33725 11.821C7.15259 11.6363 7.06168 11.4148 7.06452 11.1562C7.06168 10.9005 7.15259 10.6818 7.33725 10.5C7.5219 10.3182 7.74349 10.2273 8.00202 10.2273C8.25486 10.2273 8.47361 10.3182 8.65827 10.5C8.84293 10.6818 8.93668 10.9005 8.93952 11.1562C8.93668 11.4148 8.84293 11.6363 8.65827 11.821C8.47361 12.0028 8.25486 12.0937 8.00202 12.0937Z" />
);

const Smiley = () => (
  <>
    <circle cx="5" cy="6" r="1" />
    <circle cx="11" cy="6" r="1" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.61157 9C4.0663 11.004 5.85848 12.5 8.00006 12.5C10.1417 12.5 11.9338 11.004 12.3886 9H11.3551C10.9248 10.4457 9.58557 11.5 8.00006 11.5C6.41455 11.5 5.07528 10.4457 4.645 9H3.61157Z"
    />
  </>
);

const Heart = () => (
  <path d="M7.80389 11.3691L7.80399 11.369L7.79544 11.3608L7.78656 11.3522L7.78655 11.3521L4.23617 7.79677C3.25461 6.81383 3.25461 5.21986 4.23617 4.23692C5.21735 3.25436 6.80786 3.25436 7.78904 4.23692L8.14284 4.59122L8.49664 4.23692C9.47782 3.25436 11.0687 3.25436 12.0499 4.23692C13.0315 5.21986 13.0315 6.81383 12.0499 7.79677L8.17676 11.6754C8.15817 11.694 8.12832 11.694 8.10973 11.6754L7.80389 11.3691Z" />
);

const XSmall = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.00004 7.29293L10.6465 4.64648L11.3536 5.35359L8.70714 8.00004L11.3536 10.6465L10.6465 11.3536L8.00004 8.70714L5.35359 11.3536L4.64648 10.6465L7.29293 8.00004L4.64648 5.35359L5.35359 4.64648L8.00004 7.29293Z"
  />
);

const PlusSmall = () => (
  <path d="M7.5 8.5L7.5 12H8.5V8.5H12V7.5H8.5V4H7.5L7.5 7.5H4V8.5H7.5Z" />
);

const Weather = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5.98161 5.97489L5.38136 6.00275C4.05616 6.06424 3 7.15907 3 8.5C3 9.75859 3.931 10.8015 5.1416 10.9746L5.31895 11H11C12.1046 11 13 10.1046 13 9C13 8.12681 12.4398 7.38188 11.6563 7.10987L11.0494 6.8992L10.9887 6.25966C10.8684 4.9922 9.79947 4 8.5 4C7.50315 4 6.64056 4.58341 6.23878 5.43182L5.98161 5.97489ZM5 11.9646C3.30385 11.7219 2 10.2632 2 8.5C2 6.62231 3.47861 5.08997 5.335 5.00382C5.89595 3.81929 7.1023 3 8.5 3C10.3201 3 11.8156 4.38924 11.9842 6.16517C13.1576 6.57251 14 7.68788 14 9C14 10.6569 12.6569 12 11 12H5V11.9646Z"
  />
);

const Clock = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 5H8.5V8.19098L10.2236 9.05279L9.77639 9.94721L7.5 8.80902V5Z"
    />
  </>
);

const Chat = () => (
  <path d="M10.8571 12.2918L11.014 11.817L10.7959 11.745L10.5991 11.8635L10.8571 12.2918ZM12.2857 10.8623L11.8645 10.5929L11.7358 10.7942L11.8115 11.0207L12.2857 10.8623ZM13 13L12.8431 13.4747C13.0228 13.5341 13.2206 13.487 13.3541 13.353C13.4877 13.219 13.5342 13.021 13.4742 12.8415L13 13ZM10.5991 11.8635C9.94405 12.2582 8.87909 12.5 8 12.5V13.5C9.00806 13.5 10.2645 13.2326 11.1152 12.7201L10.5991 11.8635ZM8 12.5C5.51471 12.5 3.5 10.4853 3.5 8.00004H2.5C2.5 11.0376 4.96244 13.5 8 13.5V12.5ZM3.5 8.00004C3.5 5.51475 5.51472 3.5 8 3.5V2.5C4.96242 2.5 2.5 4.96247 2.5 8.00004H3.5ZM8 3.5C10.4853 3.5 12.5 5.51475 12.5 8.00004H13.5C13.5 4.96247 11.0376 2.5 8 2.5V3.5ZM12.5 8.00004C12.5 8.93552 12.2914 9.92518 11.8645 10.5929L12.707 11.1316C13.2729 10.2465 13.5 9.046 13.5 8.00004H12.5ZM10.7002 12.7665L12.8431 13.4747L13.1569 12.5253L11.014 11.817L10.7002 12.7665ZM13.4742 12.8415L12.7599 10.7038L11.8115 11.0207L12.5258 13.1585L13.4742 12.8415Z" />
);

const Links = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.78361 2.70909C8.30172 2.19097 9.00444 1.8999 9.73716 1.8999C11.263 1.8999 12.4999 3.13682 12.4999 4.66264C12.4999 5.39537 12.2088 6.09808 11.6907 6.6162L7.08483 11.2221C6.77888 11.528 6.36394 11.6999 5.93127 11.6999C5.03029 11.6999 4.2999 10.9695 4.2999 10.0685C4.2999 9.63587 4.47178 9.22092 4.77772 8.91498L9.24635 4.44635L9.95345 5.15346L5.48483 9.62209C5.36642 9.74049 5.2999 9.90108 5.2999 10.0685C5.2999 10.4172 5.58258 10.6999 5.93127 10.6999C6.09872 10.6999 6.25931 10.6334 6.37772 10.515L10.9836 5.90909C11.3142 5.57851 11.4999 5.13015 11.4999 4.66264C11.4999 3.68911 10.7107 2.8999 9.73716 2.8999C9.26965 2.8999 8.82129 3.08562 8.49071 3.4162L3.74757 8.15934C3.20482 8.7021 2.8999 9.43822 2.8999 10.2058C2.8999 11.8042 4.19564 13.0999 5.79401 13.0999C6.56158 13.0999 7.29771 12.795 7.84046 12.2522L12.4463 7.64635L13.1535 8.35346L8.54757 12.9593C7.81728 13.6896 6.8268 14.0999 5.79401 14.0999C3.64336 14.0999 1.8999 12.3564 1.8999 10.2058C1.8999 9.17301 2.31017 8.18252 3.04046 7.45224L7.78361 2.70909Z"
    />
  </>
);

const Publish = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M3.1001 1.8999H11.6001C12.7599 1.8999 13.7001 2.8401 13.7001 3.9999V11.1999C13.7001 12.3597 12.7599 13.2999 11.6001 13.2999H6.5001V13.9999H5.5001V13.2999H3.1001V1.8999ZM6.5001 12.2999H11.6001C12.2076 12.2999 12.7001 11.8074 12.7001 11.1999V3.9999C12.7001 3.39239 12.2076 2.8999 11.6001 2.8999H6.5001V12.2999ZM5.5001 2.8999V12.2999H4.1001V2.8999H5.5001ZM11.2001 6.0999H8.0001V5.0999H11.2001V6.0999Z"
  />
);

const Groups = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M4.4 5.8C5.1732 5.8 5.8 5.1732 5.8 4.4C5.8 3.6268 5.1732 3 4.4 3C3.6268 3 3 3.6268 3 4.4C3 5.1732 3.6268 5.8 4.4 5.8ZM6.74784 4.9C6.55199 5.82422 5.82422 6.55199 4.9 6.74784V9.25216C5.82422 9.44801 6.55199 10.1758 6.74784 11.1H9.25216C9.44801 10.1758 10.1758 9.44801 11.1 9.25216V6.74784C10.1758 6.55199 9.44801 5.82422 9.25216 4.9H6.74784ZM9.25216 3.9C9.48219 2.8145 10.446 2 11.6 2C12.9255 2 14 3.07452 14 4.4C14 5.55402 13.1855 6.51781 12.1 6.74784V9.25216C13.1855 9.48219 14 10.446 14 11.6C14 12.9255 12.9255 14 11.6 14C10.446 14 9.48219 13.1855 9.25216 12.1H6.74784C6.51781 13.1855 5.55402 14 4.4 14C3.07452 14 2 12.9255 2 11.6C2 10.446 2.8145 9.48219 3.9 9.25216V6.74784C2.8145 6.51781 2 5.55402 2 4.4C2 3.07452 3.07452 2 4.4 2C5.55402 2 6.51781 2.8145 6.74784 3.9H9.25216ZM11.6 5.8C12.3732 5.8 13 5.1732 13 4.4C13 3.6268 12.3732 3 11.6 3C10.8268 3 10.2 3.6268 10.2 4.4C10.2 5.1732 10.8268 5.8 11.6 5.8ZM13 11.6C13 12.3732 12.3732 13 11.6 13C10.8268 13 10.2 12.3732 10.2 11.6C10.2 10.8268 10.8268 10.2 11.6 10.2C12.3732 10.2 13 10.8268 13 11.6ZM4.4 13C5.1732 13 5.8 12.3732 5.8 11.6C5.8 10.8268 5.1732 10.2 4.4 10.2C3.6268 10.2 3 10.8268 3 11.6C3 12.3732 3.6268 13 4.4 13Z"
  />
);

const Gear = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M6.16271 3.76511L4.90354 2.81793C4.54968 3.02032 4.21841 3.25634 3.91432 3.5215L4.43733 4.95812C4.55802 5.28965 4.30665 5.63852 3.95397 5.62899L2.37764 5.58635C2.21487 5.94798 2.08756 6.3283 2 6.72309L3.28659 7.58453C3.58236 7.78256 3.58236 8.21744 3.28659 8.41547L2 9.27691C2.08756 9.6717 2.21487 10.052 2.37764 10.4136L3.95397 10.371C4.30665 10.3615 4.55802 10.7104 4.43733 11.0419L3.91432 12.4785C4.21841 12.7437 4.54968 12.9797 4.90354 13.1821L6.16271 12.2349C6.44057 12.0259 6.84165 12.1573 6.942 12.4902L7.38826 13.9706C7.58947 13.99 7.79355 14 8 14C8.20645 14 8.41053 13.99 8.61174 13.9706L9.058 12.4902C9.15835 12.1573 9.55943 12.0259 9.8373 12.2349L11.0965 13.1821C11.4503 12.9797 11.7816 12.7437 12.0857 12.4785L11.5627 11.0419C11.442 10.7104 11.6933 10.3615 12.046 10.371L13.6224 10.4136C13.7851 10.052 13.9124 9.6717 14 9.27691L12.7134 8.41547C12.4176 8.21744 12.4176 7.78256 12.7134 7.58453L14 6.72309C13.9124 6.3283 13.7851 5.94798 13.6224 5.58636L12.046 5.62899C11.6933 5.63852 11.442 5.28965 11.5627 4.95812L12.0857 3.5215C11.7816 3.25634 11.4503 3.02032 11.0965 2.81793L9.8373 3.76511C9.55943 3.97412 9.15835 3.84274 9.058 3.50984L8.61174 2.02941C8.41053 2.00996 8.20645 2 8 2C7.79355 2 7.58947 2.00996 7.38826 2.02941L6.942 3.50984C6.84165 3.84274 6.44057 3.97412 6.16271 3.76511ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
  />
);

const LeapArrow = () => (
  <path d="M9.28539 3.65234L9.97303 3.00035L14 6.81854L9.97303 10.6367L9.28539 9.98473L12.1348 7.28729L4.97528 7.28728C3.87865 7.28728 2.98876 8.1353 2.98876 9.17933L2.98876 12L2 12L2 9.17933C2 7.61967 3.33483 6.34978 4.97528 6.34978L12.1348 6.34979L9.28539 3.65234Z" />
);

const Home = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8 1.34155L14.5 6.91298L14.5001 14.5001H9.21429V11.4287C9.21429 10.758 8.67063 10.2144 8 10.2144C7.32937 10.2144 6.78572 10.758 6.78572 11.4287V14.5001H1.50006L1.5 6.91298L8 1.34155ZM2.5 7.37291L2.50005 13.5001H5.78572V11.4287C5.78572 10.2057 6.77709 9.21438 8 9.21438C9.22292 9.21438 10.2143 10.2057 10.2143 11.4287V13.5001H13.5001L13.5 7.37292L8 2.65863L2.5 7.37291Z"
  />
);

const TrashCan = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11 3H5V4H11V3ZM12 4V3V2H11H5H4V3V4H3H2V5H3V13V14H4H12H13V13V5H14V4H13H12ZM12 5H11H5H4V13H12V5ZM6 7H7V11H6V7ZM10 7H9V11H10V7Z"
  />
);

const Menu = () => (
  <>
    <path fillRule="evenodd" clipRule="evenodd" d="M14 8.5H2V7.5H14V8.5Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M2 2.5H14V3.5H2V2.5Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M14 13.5H2V12.5H14V13.5Z" />
  </>
);

const Node = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z"
    />
    <path d="M9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z" />
  </>
);

const Boot = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.5 1.5V5.73077H7.5V1.5H8.5ZM5.80029 6.5074L3.03106 3.73817L3.73817 3.03106L6.5074 5.80029L5.80029 6.5074ZM9.4926 5.80029L12.2618 3.03106L12.9689 3.73817L10.1997 6.5074L9.4926 5.80029ZM10.2699 7.49519L14.5006 7.50065L14.4994 8.50064L10.2686 8.49519L10.2699 7.49519ZM1.5 7.49583H5.73077V8.49583H1.5V7.49583ZM6.5074 10.1997L3.73817 12.9689L3.03106 12.2618L5.80029 9.4926L6.5074 10.1997ZM12.2618 12.9689L9.4926 10.1997L10.1997 9.4926L12.9689 12.2618L12.2618 12.9689ZM8.5 10.2692V14.5H7.5V10.2692H8.5Z"
  />
);

const Upload = () => (
  <>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 8H3V12H13V8H14V13H2V8Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 2.9645L5.11092 5.35359L4.40381 4.64648L8 1.05029L11.5962 4.64648L10.8891 5.35359L8.5 2.9645L8.5 10.2427L7.5 10.2427V2.9645Z"
    />
  </>
);

const Dojo = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M14.4999 2.5L1.50008 2.50017L1.5 13.5H14.5L14.4999 2.5ZM1.50007 1.50017L14.4999 1.5C15.0522 1.49999 15.4999 1.9477 15.4999 2.49999L15.5 13.5C15.5 14.0523 15.0523 14.5 14.5 14.5H1.5C0.947713 14.5 0.499996 14.0523 0.5 13.5L0.500082 2.50016C0.500086 1.94789 0.947792 1.50018 1.50007 1.50017ZM8.02808 8.0001L3.74266 5.42885L4.25716 4.57136L9.97173 8.0001L4.25716 11.4288L3.74266 10.5714L8.02808 8.0001ZM12.4999 11.5001H8.99991V10.5001H12.4999V11.5001Z"
  />
);

const Adjust = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M4.1 8.35989L4.1 2H5.1L5.1 8.35989C6.0184 8.5842 6.7 9.4125 6.7 10.4C6.7 11.3875 6.0184 12.2158 5.1 12.4401V14H4.1V12.4401C3.1816 12.2158 2.5 11.3875 2.5 10.4C2.5 9.4125 3.1816 8.5842 4.1 8.35989ZM10.5 3.55989L10.5 2H11.5L11.5 3.55989C12.4184 3.7842 13.1 4.6125 13.1 5.6C13.1 6.5875 12.4184 7.4158 11.5 7.64011V14H10.5V7.64011C9.5816 7.4158 8.9 6.5875 8.9 5.6C8.9 4.6125 9.5816 3.7842 10.5 3.55989ZM11 4.5C10.3925 4.5 9.9 4.99249 9.9 5.6C9.9 6.20751 10.3925 6.7 11 6.7C11.6075 6.7 12.1 6.20751 12.1 5.6C12.1 4.99249 11.6075 4.5 11 4.5ZM4.6 9.3C3.99249 9.3 3.5 9.79249 3.5 10.4C3.5 11.0075 3.99249 11.5 4.6 11.5C5.20751 11.5 5.7 11.0075 5.7 10.4C5.7 9.79249 5.20751 9.3 4.6 9.3Z"
  />
);

const Inbox = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 3H3L3 13H13V3ZM3 2C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H3Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 8.5H6.5V9C6.5 9.82843 7.17157 10.5 8 10.5C8.82843 10.5 9.5 9.82843 9.5 9V8.5H13V9.5H10.45C10.2184 10.6411 9.20948 11.5 8 11.5C6.79052 11.5 5.78164 10.6411 5.55001 9.5H3V8.5Z"
    />
  </>
);

const WestCarat = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10.7764 4.55273L3.88199 7.99995L10.7764 11.4472L11.2236 10.5527L6.11806 7.99995L11.2236 5.44716L10.7764 4.55273Z"
  />
);

const EastCarat = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5.22358 4.55273L12.118 7.99995L5.22358 11.4472L4.77637 10.5527L9.88194 7.99995L4.77637 5.44716L5.22358 4.55273Z"
  />
);

const Keyfile = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.05556 5.11111C4.91467 5.11111 5.61111 4.41467 5.61111 3.55556C5.61111 2.69645 4.91467 2 4.05556 2C3.19645 2 2.5 2.69645 2.5 3.55556C2.5 4.41467 3.19645 5.11111 4.05556 5.11111ZM4.05556 6.11111C5.46695 6.11111 6.61111 4.96695 6.61111 3.55556C6.61111 2.14416 5.46695 1 4.05556 1C2.64416 1 1.5 2.14416 1.5 3.55556C1.5 4.96695 2.64416 6.11111 4.05556 6.11111Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.55566 5.47217H4.55566V8.8055H6V9.8055H4.55566V10.7222H6.61122V11.7222H4.55566V12.4999H3.55566V5.47217Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 2.5H7V1.5H10.2071L13.5 4.79289V14.5H3.5V13.5H12.5V5.5H9.5V2.5ZM10.5 3.2071L11.7929 4.5H10.5V3.2071Z"
    />
  </>
);

const Image = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 3H3L3 13H13V3ZM3 2C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H3Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.99996 8.29297L6.99996 11.293L4.99996 9.29297L2.14641 12.1465L2.85352 12.8536L4.99996 10.7072L6.99996 12.7072L9.99996 9.70718L13.1464 12.8536L13.8535 12.1465L9.99996 8.29297Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7ZM6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
    />
  </>
);

const Loop = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12.793 4.07147L11.0751 2.35359L11.7822 1.64648L14.7072 4.57147L11.7822 7.49645L11.0751 6.78934L12.793 5.07147H4.5715C3.42749 5.07147 2.50008 5.99888 2.50008 7.14289V8.42861H1.50008V7.14289C1.50008 5.44659 2.8752 4.07147 4.5715 4.07147H12.793ZM14.5001 7.57147V8.85718C14.5001 10.5535 13.1249 11.9286 11.4286 11.9286H3.20718L4.92506 13.6465L4.21795 14.3536L1.29297 11.4286L4.21795 8.50363L4.92506 9.21073L3.20718 10.9286H11.4286C12.5727 10.9286 13.5001 10.0012 13.5001 8.85718V7.57147H14.5001Z"
  />
);

const SignOut = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M2 2H8V3H3V12H8V13H2V2ZM10.3536 4.64645L13.2071 7.5L10.3536 10.3536L9.64645 9.64645L11.2929 8H6V7H11.2929L9.64645 5.35355L10.3536 4.64645Z"
  />
);

const SignIn = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8 2H14V13H8V12H13V3H8V2ZM8.35355 4.64645L11.2071 7.5L8.35355 10.3536L7.64645 9.64645L9.29289 8H4V7H9.29289L7.64645 5.35355L8.35355 4.64645Z"
  />
);

const Swap = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.91421 5.34608L7.27996 7.71182L6.57285 8.41893L3 4.84608L6.53553 1.31055L7.24264 2.01765L4.91421 4.34608H12.1924V5.34608H4.91421Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7782 11.3463L8.41243 8.98054L9.11954 8.27344L12.6924 11.8463L9.15685 15.3818L8.44975 14.6747L10.7782 12.3463H3.5L3.5 11.3463H10.7782Z"
    />
  </>
);

const Expand2 = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12.4242 2.92308H10.3077V2H14V5.69231H13.0769V3.57579L10.1725 6.4802L9.5198 5.82749L12.4242 2.92308ZM6.4802 10.1725L3.57579 13.0769H5.69231V14H2V10.3077H2.92308V12.4242L5.82749 9.5198L6.4802 10.1725Z"
  />
);

const Collapse2 = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M14.3536 2.35359L11.2071 5.50004L13.5 5.50004V6.50004L9.50004 6.50004V2.50004H10.5V4.79293L13.6465 1.64648L14.3536 2.35359ZM2.50004 9.50004L6.50004 9.50004L6.50004 13.5H5.50004L5.50004 11.2071L2.35359 14.3536L1.64648 13.6465L4.79293 10.5L2.50004 10.5L2.50004 9.50004Z"
  />
);

const Expand4 = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M2 2H5.69231V2.92308H3.57579L6.4802 5.82749L5.82749 6.4802L2.92308 3.57579V5.69231H2V2ZM12.4242 2.92308H10.3077V2H14V5.69231H13.0769V3.57579L10.1725 6.4802L9.5198 5.82749L12.4242 2.92308ZM6.4802 10.1725L3.57579 13.0769H5.69231V14H2V10.3077H2.92308V12.4242L5.82749 9.5198L6.4802 10.1725ZM10.1725 9.5198L13.0769 12.4242L13.0769 10.3077L14 10.3077L14 14H10.3077V13.0769H12.4242L9.5198 10.1725L10.1725 9.5198Z"
  />
);

const Collapse4 = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M14 2.66776L11.0286 5.63912L13.1939 5.63912V6.58347L9.41653 6.58347V2.80606H10.3609V4.97136L13.3322 2L14 2.66776ZM4.97136 5.63912L2 2.66776L2.66776 2L5.63912 4.97136L5.63912 2.80606L6.58347 2.80606V6.58347L2.80605 6.58347L2.80605 5.63912L4.97136 5.63912ZM2.80606 9.41653L6.58347 9.41653L6.58347 13.1939H5.63912L5.63912 11.0286L2.66776 14L2 13.3322L4.97136 10.3609L2.80606 10.3609L2.80606 9.41653ZM9.41653 9.41653L13.1939 9.41653V10.3609L11.0286 10.3609L14 13.3322L13.3322 14L10.3609 11.0286L10.3609 13.1939L9.41652 13.1939L9.41653 9.41653Z"
  />
);

const PreviousTrack = () => (
  <>
    <rect x="2" y="14" width="1" height="12" transform="rotate(-180 2 14)" />
    <path d="M2 8L11 2.80385L11 13.1962L2 8Z" />
  </>
);

const NextTrack = () => (
  <>
    <rect x="13" y="2" width="1" height="12" />
    <path d="M13 8L4 13.1962L4 2.80385L13 8Z" />
  </>
);

const AddFile = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2071 1.5L13.5 4.7929V14.5H2.5L2.50011 1.50013L10.2071 1.5ZM3.5001 2.50012L3.50001 13.5H12.5V5.5H9.5V2.50001L3.5001 2.50012ZM10.5 3.20711V4.5H11.7929L10.5 3.20711Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 8V6.5H8.5V8H10V9H8.5V10.5H7.5V9H6V8H7.5Z"
    />
  </>
);

const Attachment = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8 1.5H14.5V14.5H3.5V9H4.5V13.5H13.5V2.5H8V1.5ZM4.19231 3.24138C4.19231 2.49777 4.80552 1.91379 5.53846 1.91379C6.27141 1.91379 6.88461 2.49777 6.88461 3.24138V5.72414C6.88461 6.92481 5.89257 7.87931 4.69231 7.87931C3.49205 7.87931 2.5 6.92481 2.5 5.72414V2H3.5V5.72414C3.5 6.35172 4.0233 6.87931 4.69231 6.87931C5.36132 6.87931 5.88462 6.35172 5.88462 5.72414V3.24138C5.88462 3.07086 5.74015 2.91379 5.53846 2.91379C5.33677 2.91379 5.19231 3.07086 5.19231 3.24138V6.13793H4.19231V3.24138ZM8 5H12V6H8V5ZM7 7.5H12V8.5H7V7.5ZM6 10H12V11H6V10Z"
  />
);

const Collection = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2H14V6H13V12.5C13 13.3284 12.3284 14 11.5 14H4.5C3.67157 14 3 13.3284 3 12.5V6H2V2ZM3 5H4V12.5C4 12.7761 4.22386 13 4.5 13H11.5C11.7761 13 12 12.7761 12 12.5V5H13V3H3V5ZM9.5 9H6.5V8H9.5V9Z"
    />
    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 6H3.5V5H12.5V6Z" />
  </>
);

const Note = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10.7113 1.5L13.5 4.36844V14.5H2.5L2.50011 1.50013L10.7113 1.5ZM3.5001 2.50012L3.50001 13.5H12.5V4.77443L10.2888 2.50001L3.5001 2.50012ZM5.00035 4.92599L9.33368 4.92891L9.33301 5.92891L4.99968 5.92599L5.00035 4.92599ZM5.00001 7.49608H11V8.49608H5.00001V7.49608ZM5.00057 10.0653L11.0006 10.072L10.9995 11.072L4.99945 11.0653L5.00057 10.0653Z"
  />
);

const Users = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 10H5C3.89543 10 3 10.8954 3 12V13H10V12C10 10.8954 9.10457 10 8 10ZM5 9C3.34315 9 2 10.3431 2 12V14H11V12C11 10.3431 9.65685 9 8 9H5Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 11.5C13 10.9477 12.5523 10.5 12 10.5V9.5C13.1046 9.5 14 10.3954 14 11.5V14H12V13H13V11.5Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8ZM12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 7C7.88071 7 9 5.88071 9 4.5C9 3.11929 7.88071 2 6.5 2C5.11929 2 4 3.11929 4 4.5C4 5.88071 5.11929 7 6.5 7ZM6.5 8C8.433 8 10 6.433 10 4.5C10 2.567 8.433 1 6.5 1C4.567 1 3 2.567 3 4.5C3 6.433 4.567 8 6.5 8Z"
    />
  </>
);

const Server = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 3H3.5C3.22386 3 3 3.22386 3 3.5V4.5C3 4.77614 3.22386 5 3.5 5H12.5C12.7761 5 13 4.77614 13 4.5V3.5C13 3.22386 12.7761 3 12.5 3ZM3.5 2C2.67157 2 2 2.67157 2 3.5V4.5C2 5.32843 2.67157 6 3.5 6H12.5C13.3284 6 14 5.32843 14 4.5V3.5C14 2.67157 13.3284 2 12.5 2H3.5Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 6H3.5C3.22386 6 3 6.22386 3 6.5V8.5C3 8.77614 3.22386 9 3.5 9H12.5C12.7761 9 13 8.77614 13 8.5V6.5C13 6.22386 12.7761 6 12.5 6ZM3.5 5C2.67157 5 2 5.67157 2 6.5V8.5C2 9.32843 2.67157 10 3.5 10H12.5C13.3284 10 14 9.32843 14 8.5V6.5C14 5.67157 13.3284 5 12.5 5H3.5Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 10H3.5C3.22386 10 3 10.2239 3 10.5V12.5C3 12.7761 3.22386 13 3.5 13H12.5C12.7761 13 13 12.7761 13 12.5V10.5C13 10.2239 12.7761 10 12.5 10ZM3.5 9C2.67157 9 2 9.67157 2 10.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V10.5C14 9.67157 13.3284 9 12.5 9H3.5Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 8H4V7H8V8ZM8 12H4V11H8V12Z"
    />
  </>
);

const Info = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
    />
    <path d="M6.2334 7.032H9.0014V11H7.8254V7.952H6.2334V7.032ZM8.3614 6.448C8.13207 6.448 7.94273 6.384 7.7934 6.256C7.6494 6.128 7.5774 5.95467 7.5774 5.736C7.5774 5.51733 7.6494 5.34133 7.7934 5.208C7.94273 5.06933 8.13207 5 8.3614 5C8.59073 5 8.7774 5.06933 8.9214 5.208C9.07073 5.34133 9.1454 5.51733 9.1454 5.736C9.1454 5.95467 9.07073 6.128 8.9214 6.256C8.7774 6.384 8.59073 6.448 8.3614 6.448Z" />
  </>
);

const Spaces = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 3H3L3 6H6V3ZM3 2C2.44772 2 2 2.44772 2 3V6C2 6.55228 2.44772 7 3 7H6C6.55228 7 7 6.55228 7 6V3C7 2.44772 6.55228 2 6 2H3Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 3H10L10 6H13V3ZM10 2C9.44772 2 9 2.44772 9 3V6C9 6.55228 9.44772 7 10 7H13C13.5523 7 14 6.55228 14 6V3C14 2.44772 13.5523 2 13 2H10Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 10H10L10 13H13V10ZM10 9C9.44772 9 9 9.44772 9 10V13C9 13.5523 9.44772 14 10 14H13C13.5523 14 14 13.5523 14 13V10C14 9.44772 13.5523 9 13 9H10Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 10H3L3 13H6V10ZM3 9C2.44772 9 2 9.44772 2 10V13C2 13.5523 2.44772 14 3 14H6C6.55228 14 7 13.5523 7 13V10C7 9.44772 6.55228 9 6 9H3Z"
    />
  </>
);

const InviteUsers = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 10H5C3.89543 10 3 10.8954 3 12V13H10V12C10 10.8954 9.10457 10 8 10ZM5 9C3.34315 9 2 10.3431 2 12V14H11V12C11 10.3431 9.65685 9 8 9H5Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 7C7.88071 7 9 5.88071 9 4.5C9 3.11929 7.88071 2 6.5 2C5.11929 2 4 3.11929 4 4.5C4 5.88071 5.11929 7 6.5 7ZM6.5 8C8.433 8 10 6.433 10 4.5C10 2.567 8.433 1 6.5 1C4.567 1 3 2.567 3 4.5C3 6.433 4.567 8 6.5 8Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7V5H13V7H15V8H13V10H12V8H10V7H12Z"
    />
  </>
);

const Lifesaver = () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5355 11.5355C13.4881 9.58291 13.4881 6.41709 11.5355 4.46447C9.58284 2.51184 6.41702 2.51184 4.4644 4.46447C2.51177 6.41709 2.51177 9.58291 4.4644 11.5355C6.41702 13.4882 9.58284 13.4882 11.5355 11.5355ZM12.2426 12.2426C14.5857 9.8995 14.5857 6.1005 12.2426 3.75736C9.89942 1.41421 6.10043 1.41421 3.75729 3.75736C1.41414 6.10051 1.41414 9.89949 3.75729 12.2426C6.10043 14.5858 9.89942 14.5858 12.2426 12.2426Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.41418 9.41421C10.1952 8.63317 10.1952 7.36683 9.41418 6.58579C8.63313 5.80474 7.3668 5.80474 6.58575 6.58579C5.8047 7.36684 5.8047 8.63316 6.58575 9.41421C7.3668 10.1953 8.63313 10.1953 9.41418 9.41421ZM10.1213 10.1213C11.2929 8.94975 11.2929 7.05025 10.1213 5.87868C8.94971 4.70711 7.05022 4.70711 5.87864 5.87868C4.70707 7.05025 4.70707 8.94975 5.87864 10.1213C7.05022 11.2929 8.94971 11.2929 10.1213 10.1213Z"
    />
    <rect
      x="3.75732"
      y="5.17163"
      width="2"
      height="3"
      transform="rotate(-45 3.75732 5.17163)"
    />
    <rect
      x="8.70703"
      y="10.1213"
      width="2"
      height="3"
      transform="rotate(-45 8.70703 10.1213)"
    />
    <rect
      x="10.8284"
      y="3.75732"
      width="2"
      height="3"
      transform="rotate(45 10.8284 3.75732)"
    />
    <rect
      x="5.87866"
      y="8.70715"
      width="2"
      height="3"
      transform="rotate(45 5.87866 8.70715)"
    />
  </>
);

export const iconIndex = {
  Info,
  Server,
  Users,
  Loop,
  SignOut,
  SignIn,
  Swap,
  Expand2,
  Collapse2,
  Expand4,
  Collapse4,
  PreviousTrack,
  NextTrack,
  AddFile,
  Attachment,
  Collection,
  Note,
  Image,
  Keyfile,
  WestCarat,
  EastCarat,
  Dojo,
  Inbox,
  Adjust,
  Menu,
  NullIcon,
  ChevronNorth,
  ChevronSouth,
  ChevronWest,
  ChevronEast,
  ArrowRefresh,
  ArrowExpand,
  ArrowExternal,
  ArrowEast,
  ArrowSouth,
  ArrowWest,
  ArrowNorth,
  ArrowNorthEast,
  ArrowSouthEast,
  ArrowSouthWest,
  ArrowNorthWest,
  Locked,
  Unlocked,
  Mail,
  Copy,
  MagnifyingGlass,
  ChevronDouble,
  ChevronDoubleSmall,
  Plus,
  Checkmark,
  CheckmarkBold,
  Minus,
  ExclaimationMark,
  ExclaimationMarkBold,
  Bullet,
  LargeBullet,
  Circle,
  Ellipsis,
  Star,
  TriangleEast,
  TriangleSouth,
  TriangleWest,
  TriangleNorth,
  CreateGroup,
  X,
  Color,
  Blank,
  Smiley,
  Heart,
  XSmall,
  PlusSmall,
  Weather,
  Clock,
  Chat,
  Links,
  Publish,
  Groups,
  Gear,
  LeapArrow,
  Home,
  TrashCan,
  Boot,
  Upload,
  Node,
  Spaces,
  InviteUsers,
  Lifesaver,
};
