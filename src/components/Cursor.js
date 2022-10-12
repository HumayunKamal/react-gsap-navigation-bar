import { useRef, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";
import styled from "styled-components";

const SyledCursor = styled.div`
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  will-change: transform;
  transform: translate(-50%, -50%);
  background: #9d9d9c;
  border-radius: 100%;
  pointer-events: none;
`;

const Cursor = forwardRef((props, ref) => {
  const el = useRef();
  useImperativeHandle(
    ref,
    () => {
      //  return our API
      return {
        moveTo(x, y) {
          gsap.to(el.current, {
            x,
            y,
          });
        },
      };
    },
    []
  );
  return <SyledCursor ref={el} />;
});

export default Cursor;
