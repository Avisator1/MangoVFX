import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const [showAll, setShowAll] = useState(false);

  const clients = [
    { name: "Daquavis", subs: 12.2, logo: "https://yt3.googleusercontent.com/gds-5Azx97B9FYfIUi1tz9q7Bq4d0YppT3Bu-B0z_qBILAO5Vh31P1iSQ_fV7ot71Kmnzu3aNg=s120-c-k-c0x00ffffff-no-rj" },
    { name: "Wisp", subs: 5.62, logo: "https://yt3.googleusercontent.com/ytc/AIdro_m3yfd__d3eGrsIDoBz0Jr1Ccofxuw_SRBfOMP7q1bcPuc=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "SB737+", subs: 4.68, logo: "https://yt3.ggpht.com/BpRyGz_cygpn9YxAAKWGXu1ll_rIuP-xeEJj1NZSe2XWgtXIcmckEJvwhczRO8I7WF1UUbaF=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Kiply", subs: 2.79, logo: "https://yt3.ggpht.com/KLGjabbw14Zlv01jonWOQ_j8Rv9sou2zKiMWxfvXbjhErmo8MfWrnMaUizYc_2_gaXyeylLQxto=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "ImShiba", subs: 1.57, logo: "https://yt3.ggpht.com/PVagyycNfhyFkhSvY82FjILFCt1qwLG1zAYl-lGg1ywzAZELM9ALLvLT9F0OuQszSBpLK1hm8BM=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Notvixios", subs: 2.17, logo: "https://yt3.ggpht.com/LCci3yzrf7mXofG5FN4QFfHEpDxV6_I3tL_2z2qVijXy6Rj_Ac12CGxb3xzQxUCkWOSuNKmmVxk=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "DrDonut", subs: 1.35, logo: "https://yt3.ggpht.com/9_wcgCUByYB_Q0-aDMRmpQOcYGdcHdhT858dJlfVZbMalvhnSMMx8eci24qCWURq-birNw71=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Flamefrags", subs: 0.923, logo: "https://yt3.ggpht.com/18z7udGc2e2xtDRvTh853r7Tm_R8iUdKiIAIFXPQEEzYhjbTdPOYqWdj5XcZS7kS9GKvAPZUXw=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "InFamousJJ", subs: 0.307, logo: "https://yt3.ggpht.com/SNRMQV-y4CnCAicGqmERMg4YOS4ejg8Z8u8EwpyEud3j9Dif9YCEbNwvrDESNn255-smBIS4=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Sharpness", subs: 0.587, logo: "https://yt3.googleusercontent.com/ytc/AIdro_nm36JZ4nDxTYx2z-XO4M4c5NFLiZqyqTWDavCy73CSpUQ=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Unsorted guy", subs: 0.4, logo: "https://yt3.ggpht.com/EPFA-GwRzb5N2I3eztSQurxWHJZOdiXatvhcRPJPWFgFuY1keiOYojgAUeO6q-UcC3wryFp3Vw=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Intel Edits", subs: 0.352, logo: "https://yt3.ggpht.com/35UoRqUv7gcxjH4h3rKLuk_AB5u3RWRLvIDAl_kndLYwJlji-fSpSU1N6_p03qTLzjdSHLAwHw=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Krustydavid", subs: 0.181, logo: "https://yt3.ggpht.com/q0Tmok06qCLdoE7JqGuyiBW8rY15E_pO1i4JYhfJlKKFXaVFxMmTeOZXpa_8IksPGIzQqabzuQ=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Artualcm", subs: 0.147, logo: "https://yt3.ggpht.com/0xoPZV5afD_Mj9zQsNhgGLwoE6QuIIz5dwx9ETcetdHkbdRDzPMjk0p_Akj8USpmPzoHxM-YCg=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Dewier", subs: 0.11, logo: "https://yt3.ggpht.com/Y0SqgAfWP4u-sDcaqU_0uIQGeCkQbLxWGT7StAIyF2zCkHm7JEs-1zEG9k5Nd2H5zfGVHYvvNOc=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Dannyisdahbomb", subs: 0.107, logo: "https://yt3.ggpht.com/7j_KXPOKkDOoBDkdjMVe0uykZyhnPk3V7lOXmsEj0n-Z4PAQlvzmIOUiZErIiXMQBnxuzkp4=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "jakejxke", subs: 0.107, logo: "https://yt3.ggpht.com/eTw7DpC5iXNBXwAx8r7PzZ4WBziUAgMmjrs2U1-mzgXaFpnhrpkdYvccilrU49IDB0sbWRR-hQ=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "ricefarmer11", subs: 0.102, logo: "https://yt3.ggpht.com/-Y8sTK9Eig7O3myBqq1qTI601FK7UA3m_HFtHtQwpRA_cYfD4kTATTbpAhoiG7pumY9PIYUKcA=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "beentaken", subs: 0.101, logo: "https://yt3.ggpht.com/LxYNmWGz0_W8sXdDb3_kkejSUb370wp9KvwwrPqgy7MmCeDZ8uVZFynuYw-J3Kac-zJ4KP4fmA=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Tryhard", subs: 0.0953, logo: "https://yt3.ggpht.com/F5NUUwbvaOde0GEJD3SUaaG9GdADkf78BHeM5YpQDvh1DlkLyhxRs1wr3VZz6ZNlRpvOhvoPHkg=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Jooonah", subs: 0.0918, logo: "https://yt3.ggpht.com/3L5YBKzzjM3t_fEPcsJ7umkCNoQkWkUFw9piOEJDgHUV0KenVDe8JJyOzTEf_UZWILSDtVtKNUw=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Tai", subs: 0.0517, logo: "https://yt3.ggpht.com/Ed01sVs8RuxTu_5dosZphDQl502jL_PN5601kvrfWBzrtAbYugOhp0eAVbFyha7eec34T6xoNA=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "Laqqy", subs: 0.0279, logo: "https://yt3.ggpht.com/JxdA3tgCNYoArQcs7f8ElObU-30SUaVb8i-BXliDwR27A87ER50-uo-SQyP9MeHfoBs9biwsO30=s176-c-k-c0x00ffffff-no-rj-mo" },
    { name: "DumbisDumb", subs: 0.0223, logo: "https://yt3.ggpht.com/YOrrCjhXM3gNRqgZ_Ro-wzPemEipwNIK0O0E-XC8PWlDoJE4IroZ-CiF6mo6nYgsSYfuz_lV7g=s176-c-k-c0x00ffffff-no-rj-mo" }
  ].sort((a, b) => b.subs - a.subs); // Sort by highest subs first

  const visibleClients = showAll ? clients : clients.slice(0, 8);

  return (
    <div className="bg-black text-white py-[5vw] px-4">
      <div className="max-w-[112rem] mx-auto">
        {/* Section Header */}
        <div className="mb-[5vw]">
          <p className="neue text-xl md:text-2xl font-[500] mb-3">03. CLIENTS</p>
          <h1 className="neue text-[12vw] md:text-[10vw] font-[500] leading-none tracking-tight">
            TRUSTED BY<br />THE BEST
          </h1>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {visibleClients.map((client) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center"
            >
              <div className="w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[12vw] md:h-[12vw] rounded-full bg-gray-900 mb-4 overflow-hidden border border-white/10">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <p className="neue text-[4vw] sm:text-[3vw] md:text-[1.7vw] font-[500] uppercase">
                  {client.name}
                </p>
                <p className="neue text-[3vw] sm:text-[2.2vw] md:text-[1.3vw] font-[500] text-white/60">
                  {client.subs >= 1 ? 
                    `${client.subs.toFixed(1)}M` : 
                    `${(client.subs * 1000).toFixed(0)}K`} SUBS
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More/Less Button */}
        {clients.length > 8 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="neue bg-white text-black px-8 py-3 font-[500] text-[4vw] sm:text-[2.5vw] md:text-[1.1vw] uppercase tracking-wide hover:bg-gray-200 transition-colors duration-200"
            >
              {showAll ? 'VIEW LESS' : 'VIEW MORE (+16)'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;