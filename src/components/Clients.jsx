import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Clients = () => {
  const marqueeRef = useRef(null);
  const reverseMarqueeRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();

  const clients = [
    { name: "Daquavis", subs: "12.2M", logo: "https://yt3.googleusercontent.com/gds-5Azx97B9FYfIUi1tz9q7Bq4d0YppT3Bu-B0z_qBILAO5Vh31P1iSQ_fV7ot71Kmnzu3aNg=s120-c-k-c0x00ffffff-no-rj" },
    { name: "Kiply", subs: "2.79M", logo: "https://yt3.ggpht.com/KLGjabbw14Zlv01jonWOQ_j8Rv9sou2zKiMWxfvXbjhErmo8MfWrnMaUizYc_2_gaXyeylLQxto=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Wisp", subs: "5.62M", logo: "https://yt3.googleusercontent.com/ytc/AIdro_m3yfd__d3eGrsIDoBz0Jr1Ccofxuw_SRBfOMP7q1bcPuc=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "DrDonut", subs: "1.35M", logo: "https://yt3.ggpht.com/9_wcgCUByYB_Q0-aDMRmpQOcYGdcHdhT858dJlfVZbMalvhnSMMx8eci24qCWURq-birNw71=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Notvixios", subs: "2.17M", logo: "https://yt3.ggpht.com/LCci3yzrf7mXofG5FN4QFfHEpDxV6_I3tL_2z2qVijXy6Rj_Ac12CGxb3xzQxUCkWOSuNKmmVxk=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Flamefrags", subs: "923K", logo: "https://yt3.ggpht.com/18z7udGc2e2xtDRvTh853r7Tm_R8iUdKiIAIFXPQEEzYhjbTdPOYqWdj5XcZS7kS9GKvAPZUXw=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Sharpness", subs: "587K", logo: "https://yt3.googleusercontent.com/ytc/AIdro_nm36JZ4nDxTYx2z-XO4M4c5NFLiZqyqTWDavCy73CSpUQ=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "SB737+", subs: "4.68M", logo: "https://yt3.ggpht.com/BpRyGz_cygpn9YxAAKWGXu1ll_rIuP-xeEJj1NZSe2XWgtXIcmckEJvwhczRO8I7WF1UUbaF=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Unsorted guy", subs: "400K", logo: "https://yt3.ggpht.com/EPFA-GwRzb5N2I3eztSQurxWHJZOdiXatvhcRPJPWFgFuY1keiOYojgAUeO6q-UcC3wryFp3Vw=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Intel Edits", subs: "352K", logo: "https://yt3.ggpht.com/35UoRqUv7gcxjH4h3rKLuk_AB5u3RWRLvIDAl_kndLYwJlji-fSpSU1N6_p03qTLzjdSHLAwHw=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Krustydavid", subs: "181K", logo: "https://yt3.ggpht.com/q0Tmok06qCLdoE7JqGuyiBW8rY15E_pO1i4JYhfJlKKFXaVFxMmTeOZXpa_8IksPGIzQqabzuQ=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Artualcm", subs: "147K", logo: "https://yt3.ggpht.com/0xoPZV5afD_Mj9zQsNhgGLwoE6QuIIz5dwx9ETcetdHkbdRDzPMjk0p_Akj8USpmPzoHxM-YCg=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Dewier", subs: "110K", logo: "https://yt3.ggpht.com/Y0SqgAfWP4u-sDcaqU_0uIQGeCkQbLxWGT7StAIyF2zCkHm7JEs-1zEG9k5Nd2H5zfGVHYvvNOc=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Dannyisdahbomb", subs: "107K", logo: "https://yt3.ggpht.com/7j_KXPOKkDOoBDkdjMVe0uykZyhnPk3V7lOXmsEj0n-Z4PAQlvzmIOUiZErIiXMQBnxuzkp4=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "jakejxke", subs: "107K", logo: "https://yt3.ggpht.com/eTw7DpC5iXNBXwAx8r7PzZ4WBziUAgMmjrs2U1-mzgXaFpnhrpkdYvccilrU49IDB0sbWRR-hQ=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "ricefarmer11", subs: "102K", logo: "https://yt3.ggpht.com/-Y8sTK9Eig7O3myBqq1qTI601FK7UA3m_HFtHtQwpRA_cYfD4kTATTbpAhoiG7pumY9PIYUKcA=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "beentaken", subs: "101K", logo: "https://yt3.ggpht.com/LxYNmWGz0_W8sXdDb3_kkejSUb370wp9KvwwrPqgy7MmCeDZ8uVZFynuYw-J3Kac-zJ4KP4fmA=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Tryhard", subs: "95.3K", logo: "https://yt3.ggpht.com/F5NUUwbvaOde0GEJD3SUaaG9GdADkf78BHeM5YpQDvh1DlkLyhxRs1wr3VZz6ZNlRpvOhvoPHkg=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Jooonah", subs: "91.8K", logo: "https://yt3.ggpht.com/3L5YBKzzjM3t_fEPcsJ7umkCNoQkWkUFw9piOEJDgHUV0KenVDe8JJyOzTEf_UZWILSDtVtKNUw=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Tai", subs: "51.7K", logo: "https://yt3.ggpht.com/Ed01sVs8RuxTu_5dosZphDQl502jL_PN5601kvrfWBzrtAbYugOhp0eAVbFyha7eec34T6xoNA=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Laqqy", subs: "27.9K", logo: "https://yt3.ggpht.com/JxdA3tgCNYoArQcs7f8ElObU-30SUaVb8i-BXliDwR27A87ER50-uo-SQyP9MeHfoBs9biwsO30=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "DumbisDumb", subs: "22.3K", logo: "https://yt3.ggpht.com/YOrrCjhXM3gNRqgZ_Ro-wzPemEipwNIK0O0E-XC8PWlDoJE4IroZ-CiF6mo6nYgsSYfuz_lV7g=s176-c-k-c0x00ffffff-no-rj-mo" }
  ];

  const firstHalf = clients.slice(0, 11);
  const secondHalf = clients.slice(11, 22);

  // State to control how many times to repeat the arrays to fill viewport fully
  const [repeatCount, setRepeatCount] = useState(2);

  // Calculate repeatCount based on window width to ensure marquee fills entire width
  const updateRepeatCount = () => {
    const vwToPx = window.innerWidth / 100;
    // Circle width 8.5vw + margin left and right (2.5vw * 2) + mr (1.8vw)
    const approxItemWidthPx = 8.5 * vwToPx + 2.5 * vwToPx * 2 + 1.8 * vwToPx;

    // We want content length to be at least twice viewport width for smooth looping
    const neededRepeats = Math.ceil((window.innerWidth * 2) / approxItemWidthPx);

    setRepeatCount(neededRepeats > 2 ? neededRepeats : 2);
  };

  useEffect(() => {
    updateRepeatCount();
    window.addEventListener('resize', updateRepeatCount);
    return () => window.removeEventListener('resize', updateRepeatCount);
  }, []);

  const animateMarquee = (element, direction = 'left') => {
    if (!element.current) return;

    const scrollWidth = element.current.scrollWidth / 2;
    const duration = scrollWidth / (window.innerWidth * 0.05);

    const start = direction === 'left' ? '0%' : '-100%';
    const end = direction === 'left' ? '-100%' : '0%';

    element.current.style.transform = `translateX(${start})`;

    const animation = element.current.animate(
      [
        { transform: `translateX(${start})` },
        { transform: `translateX(${end})` }
      ],
      {
        duration: duration * 1000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    return () => animation.cancel();
  };

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.8 }
    });

    const cancelLeft = animateMarquee(marqueeRef, 'left');
    const cancelRight = animateMarquee(reverseMarqueeRef, 'right');

    return () => {
      if (cancelLeft) cancelLeft();
      if (cancelRight) cancelRight();
    };
  }, [controls, repeatCount]);

  // Render a single client item
  const renderClientItem = (client, i, suffix = '') => (
    <div
      key={`${client.name}-${i}${suffix}`}
      className="flex-shrink-0 flex items-center mx-[2.5vw]"
    >
      <div className="w-[8.5vw] h-[8.5vw] rounded-full bg-gray-900 flex items-center justify-center overflow-hidden mr-[1.8vw] border border-white/10">
        {client.logo ? (
          <img src={client.logo} alt={client.name} className="w-full h-full object-cover" />
        ) : (
          <span className="neue text-[3.2vw] font-[500] text-white/50">
            {client.name.charAt(0)}
          </span>
        )}
      </div>
      <div>
        <p className="neue text-[3vw] md:text-[1.7vw] font-[500] uppercase leading-none">
          {client.name}
        </p>
        <p className="neue text-[2.2vw] md:text-[1.3vw] font-[500] text-white/60">
          {client.subs} SUBS
        </p>
      </div>
    </div>
  );

  // Helper to repeat arrays N times
  const repeatArray = (arr, times) => {
    let result = [];
    for (let i = 0; i < times; i++) {
      result = result.concat(arr.map((item, index) => ({ ...item, _repeatIndex: i * arr.length + index })));
    }
    return result;
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={controls}
      className="bg-black text-white py-[10vw] relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="px-4 mb-[10vw] max-w-[112rem] mx-auto">
        <p className="neue text-xl md:text-2xl font-[500] mb-3">03. CLIENTS</p>
        <h1 className="neue text-[12vw] md:text-[10vw] font-[500] leading-none tracking-tight">
          TRUSTED BY<br />THE BEST
        </h1>
      </div>

      {/* First Marquee (left to right) */}
      <div className="relative h-[13vw] overflow-hidden border-t border-b border-white/20">
        <div
          ref={marqueeRef}
          className="absolute top-0 left-0 h-full flex items-center whitespace-nowrap"
        >
          {repeatArray(firstHalf, repeatCount).map((client, i) =>
            renderClientItem(client, i)
          )}
        </div>
      </div>

      {/* Second Marquee (right to left) */}
      <div className="relative h-[13vw] overflow-hidden mt-[1vw]">
        <div
          ref={reverseMarqueeRef}
          className="absolute top-0 left-0 h-full flex items-center whitespace-nowrap"
        >
          {repeatArray(secondHalf, repeatCount).map((client, i) =>
            renderClientItem(client, i, '-reverse')
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Clients;
