import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollAnimation
 * Applies a GSAP from-animation with ScrollTrigger to a ref'd element.
 *
 * @param {object} fromVars  - GSAP `from` vars (initial state)
 * @param {object} toVars    - GSAP `to` vars (animated state)
 * @param {object} options   - ScrollTrigger options overrides
 */
export function useScrollAnimation(fromVars = {}, toVars = {}, options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
          ...options,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * useStaggerAnimation
 * Stagger-animates child elements on scroll.
 *
 * @param {string} childSelector  - CSS selector for children to animate
 * @param {object} fromVars       - initial state
 * @param {object} toVars         - target state
 * @param {number} stagger        - stagger delay in seconds
 */
export function useStaggerAnimation(childSelector = '.stagger-item', fromVars = {}, toVars = {}, stagger = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(childSelector),
        fromVars,
        {
          ...toVars,
          stagger,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}
