import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Modal, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Masonry } from '@mui/lab';
import './Home.css';
import CloseIcon from '@mui/icons-material/Close';

// Import hero images
import hero1 from '../assets/images/hero/SOA_Dum_Sulicka_BoysPlayNice_01.jpg';
import hero2 from '../assets/images/hero/SOA_Dum_Sulicka_BoysPlayNice_05.jpg';
import hero3 from '../assets/images/hero/SOA_Dum_Sulicka_BoysPlayNice_06.jpg';
import hero4 from '../assets/images/hero/SOA_Dum_Sulicka_BoysPlayNice_26.jpg';

// Import publication images
import pub1 from '../assets/images/publications/zahrada01.jpg';
import pub2 from '../assets/images/publications/zahrada02.jpg';
import pub3 from '../assets/images/publications/zahrada03.jpg';
import pub4 from '../assets/images/publications/zahrada2_01.jpg';
import pub5 from '../assets/images/publications/zahrada2_02.jpg';
import pub6 from '../assets/images/publications/zena_dekor01.jpg';
import pub7 from '../assets/images/publications/zena_dekor02.jpg';

// Import michal.jpg
import michal from '../assets/images/michal.jpg';

// Hero images
const HERO_IMAGES = [hero1, hero2, hero3, hero4];

// Add debug logging
console.log('Hero images:', HERO_IMAGES);

// Publication images
const PUBLICATION_IMAGES = [pub1, pub2, pub3, pub4, pub5, pub6, pub7];

// Add debug logging
console.log('Publication images:', PUBLICATION_IMAGES);

const PROJECTS = [
  {
    id: 1,
    title: 'Modern Zen Garden',
    description: 'A contemporary interpretation of traditional Japanese garden design principles, featuring clean lines and natural materials.',
    images: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1501261379837-c3b516327829?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 2,
    title: 'Mediterranean Terrace',
    description: 'An elegant outdoor living space that combines drought-resistant plants with classical Mediterranean design elements.',
    images: [
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1528061019198-c2391f414bec?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1536236155319-1edab471917c?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 3,
    title: 'Urban Rooftop Oasis',
    description: 'A sustainable green roof design that transforms unused space into a vibrant garden retreat.',
    mainImage: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542320868-f4d80389e1c4?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80',
    ]
  },
  {
    id: 4,
    title: 'Coastal Garden Retreat',
    description: 'A windswept coastal garden featuring salt-tolerant plants and natural stone pathways that complement the oceanfront setting.',
    mainImage: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80',
    ]
  },
  {
    id: 5,
    title: 'Wildlife-Friendly Garden',
    description: 'An eco-conscious design that creates a haven for local wildlife while maintaining a beautiful and functional space for humans.',
    mainImage: 'https://images.unsplash.com/photo-1584479898061-15742e14f50d?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1584479898061-15742e14f50d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&q=80',
    ]
  },
  {
    id: 6,
    title: 'Contemporary Water Garden',
    description: 'A modern interpretation of water features integrated with geometric hardscaping and lush plantings.',
    mainImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584479898061-15742e14f50d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80',
    ]
  },
  {
    id: 7,
    title: 'Minimalist Garden Design',
    description: 'Clean lines and carefully selected plantings create a sense of calm and order in this contemporary space.',
    mainImage: 'https://images.unsplash.com/photo-1536236155319-1edab471917c?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1536236155319-1edab471917c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584479898061-15742e14f50d?auto=format&fit=crop&q=80',
    ]
  },
  {
    id: 8,
    title: 'Woodland Garden Path',
    description: 'A naturalistic design that works with existing vegetation to create magical woodland walkways.',
    mainImage: 'https://images.unsplash.com/photo-1501261379837-c3b516327829?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1501261379837-c3b516327829?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1536236155319-1edab471917c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
    ]
  }
];

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [hoveredImage, setHoveredImage] = useState<{ title: string; image: string } | null>(null);
  const [selectedPublicationIndex, setSelectedPublicationIndex] = useState<number | null>(null);
  const [selectedProjectImageIndex, setSelectedProjectImageIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    PROJECTS.forEach(project => {
      project.images.forEach(image => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          setLoadedImages(prev => ({
            ...prev,
            [image]: true
          }));
        };
      });
    });
  }, []);

  return (
    <Box
      id="main-container"
      sx={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        paddingTop: '64px', // Height of the header
      }}
    >
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          scrollSnapAlign: 'start',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgb(238, 238, 238)',
          py: 4,
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            px: { xs: 4, md: 12 },
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <Box
            className="hero-slider-container"
            sx={{
              width: '85%',
              height: '70vh',
              position: 'relative',
              overflow: 'visible',
              '& .swiper': {
                overflow: 'visible',
              },
              '& .swiper-button-prev': {
                left: 'calc(-7.5vw)',
              },
              '& .swiper-button-next': {
                right: 'calc(-7.5vw)',
              },
              '& .swiper-button-prev, & .swiper-button-next': {
                '&::after': {
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'rgba(0, 0, 0, 0.3)',
                  transition: 'color 0.3s ease',
                },
                '&:hover': {
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '4.5rem',
                    height: '4.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgb(238, 238, 238)',
                    opacity: 0.5,
                    zIndex: -1,
                  },
                  '&::after': {
                    color: 'rgb(52, 207, 161)',
                  },
                },
                background: 'none',
                width: '3rem',
                height: '3rem',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                zIndex: 1,
              },
            }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1500}
              loop={true}
              effect="fade"
              fadeEffect={{
                crossFade: true
              }}
              navigation={true}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              className="hero-swiper"
              style={{ overflow: 'visible' }}
            >
              {HERO_IMAGES.map((image, index) => (
                <SwiperSlide key={index}>
                  <Box
                    component="img"
                    src={image}
                    alt={`Landscape Design ${index + 1}`}
                    onError={(e) => {
                      console.error(`Failed to load hero image: ${image}`);
                      e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                    }}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          
          <div className="swiper-pagination" style={{ marginTop: '20px' }} />
        </Box>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          minHeight: '100vh',
          width: '100%',
          bgcolor: 'background.default',
          py: { xs: 8, md: 10 },
          scrollSnapAlign: 'start',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Container
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: { xs: 4, md: 6 },
                color: 'text.primary',
                textAlign: 'center',
                fontSize: '25px',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 500,
                maxWidth: '800px',
                mx: 'auto',
                letterSpacing: '0.02em',
                lineHeight: 1.4,
                textTransform: 'uppercase',
              }}
            >
              Čas strávený v zahradě je ten vůbec nejhezčí.
            </Typography>

            <Box
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                mb: { xs: 4, md: 6 },
              }}
            >
              <Typography
                sx={{
                  color: 'text.primary',
                  mb: { xs: 3, md: 4 },
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  fontFamily: '"IBM Plex Sans", sans-serif',
                }}
              >
                Atelier DVA je tu, aby vám pomohl vymyslet a posléze zrealizovat zahradu vašich představ.  Pečlivě nasloucháme přání a nápadům klienta a dáváme jim konkrétní obrysy. Zahrada vzniká jako dialog mezi klientem a zahradním architektem. Po dokončení projektu Vám zajistíme kompletní realizaci zahrady. Nabídneme Vám služby kvalitních zahradnických firem, se kterými již dlouhodobě spolupracujeme a můžeme garantovat jejich kvalitu.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: { xs: 2, md: 3 },
                  color: 'text.primary',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  fontSize: '25px',
                }}
              >
                O MNĚ
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 3, md: 4 },
                  alignItems: 'flex-start',
                  flexDirection: { xs: 'column', md: 'row' },
                }}
              >
                <Typography
                  sx={{
                    color: 'text.primary',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    fontFamily: '"IBM Plex Sans", sans-serif',
                    flex: 1,
                  }}
                >
                  Michal Nováček vystudoval zahradní architekturu na Mendlově zemědělské univerzitě v Brně, fakulta Lednice na Moravě zpracovává studie a prováděcí projekty soukromých zahrad a veřejné zeleně. Navrhuje interiérovou zeleň.
                  Pravidelně píše do časopisů Můj dům a Naše krásná zahrada, Bydlení.
                </Typography>
                <Box
                  component="img"
                  src={michal}
                  alt="Michal Nováček"
                  sx={{
                    width: { xs: '100%', md: '250px' },
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        sx={{
          minHeight: '100vh',
          width: '100%',
          bgcolor: 'background.paper',
          scrollSnapAlign: 'start',
          position: 'relative',
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            height: '100%',
            width: '100%',
          }}
        >
          {/* Hover Title Overlay */}
          {hoveredImage && (
            <Box
              sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                pointerEvents: 'none',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  textAlign: 'center',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 600,
                }}
              >
                {hoveredImage.title}
              </Typography>
            </Box>
          )}

          <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={0}>
            {PROJECTS.map((project) =>
              project.images.map((image, imageIndex) => {
                const seed = (project.id * 17 + imageIndex * 23) % 19;
                const isTowardsEnd = project.id >= PROJECTS.length - 2;
                const hasNoTreatment = isTowardsEnd ? 
                  (seed % 3 === 0) : 
                  (seed === 1 || seed === 4 || seed === 10 || seed === 16);
                const hasTealOverlay = !hasNoTreatment && (seed === 7);
                const prevSeed = (project.id * 17 + (imageIndex - 1) * 23) % 19;
                const nextSeed = (project.id * 17 + (imageIndex + 1) * 23) % 19;
                const prevHasTeal = prevSeed === 7;
                const nextHasTeal = nextSeed === 7;
                const shouldHaveTeal = hasTealOverlay && !prevHasTeal && !nextHasTeal;
                const heightMultiplier = 0.8 + ((seed % 5) * 0.1);
                const isLoaded = loadedImages[image];

                return (
                  <Box
                    key={`${project.id}-${imageIndex}`}
                    sx={{
                      position: 'relative',
                      cursor: 'pointer',
                      lineHeight: 0,
                      width: '100%',
                      '& img': {
                        maxHeight: `${250 * heightMultiplier}px`,
                        width: '100%',
                        height: 'auto',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        border: '2px solid rgba(255, 255, 255, 0)',
                        zIndex: 2,
                        pointerEvents: 'none',
                        transition: 'border-color 0.3s ease',
                      },
                      '&:hover::after': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      }
                    }}
                    onMouseEnter={() => setHoveredImage({ title: project.title, image })}
                    onMouseLeave={() => setHoveredImage(null)}
                    onClick={() => setSelectedProject(project)}
                  >
                    {!isLoaded && (
                      <Box
                        sx={{
                          width: '100%',
                          height: `${250 * heightMultiplier}px`,
                          bgcolor: 'rgba(0, 0, 0, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Box
                          sx={{
                            width: '40px',
                            height: '40px',
                            border: '3px solid #f3f3f3',
                            borderTop: '3px solid rgb(52, 207, 161)',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            '@keyframes spin': {
                              '0%': { transform: 'rotate(0deg)' },
                              '100%': { transform: 'rotate(360deg)' },
                            },
                          }}
                        />
                      </Box>
                    )}
                    <Box
                      component="img"
                      src={image}
                      alt={`${project.title} - Image ${imageIndex + 1}`}
                      loading="lazy"
                      sx={{
                        display: 'block',
                        borderRadius: 0,
                        objectFit: 'cover',
                        filter: hasNoTreatment ? 'none' : (shouldHaveTeal ? 'none' : 'grayscale(0.7) brightness(0.7)'),
                        transition: 'all 0.5s ease',
                        opacity: isLoaded ? 1 : 0,
                        '&:hover': {
                          filter: 'none',
                        }
                      }}
                    />
                    {shouldHaveTeal && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          bgcolor: 'rgb(52, 207, 161)',
                          opacity: 0.85,
                          transition: 'opacity 0.5s ease',
                          borderRadius: 0,
                          '&:hover': {
                            opacity: 0,
                          }
                        }}
                      />
                    )}
                  </Box>
                );
              })
            )}
          </Masonry>
        </Container>
      </Box>

      {/* Publikace Section */}
      <Box
        id="publikace"
        sx={{
          height: '100vh',
          width: '100%',
          bgcolor: 'background.default',
          py: 15,
          scrollSnapAlign: 'start',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container
          sx={{
            maxHeight: '100%',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 8,
                color: 'text.primary',
                textAlign: 'center',
                fontSize: '25px',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 500,
                maxWidth: '800px',
                mx: 'auto',
                letterSpacing: '0.02em',
                lineHeight: 1.4,
                textTransform: 'uppercase',
              }}
            >
              PUBLIKACE
            </Typography>
            <Typography
                sx={{
                  color: 'text.primary',
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  textAlign: 'center',
                }}
              >
                Ukázky článků z časopisů o zahradách a bytovém designu.
              </Typography>
            {/* Publications Carousel */}
            <Box
              className="publications-slider-container"
              sx={{
                width: '85%',
                maxWidth: '600px',
                height: '400px',
                mx: 'auto',
                mb: 6,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& .swiper-container': {
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                },
                '& .swiper': {
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  position: 'static',
                },
                '& .swiper-button-prev': {
                  left: '-100px',
                },
                '& .swiper-button-next': {
                  right: '-100px',
                  position: 'absolute',
                },
                '& .swiper-button-prev, & .swiper-button-next': {
                  '&::after': {
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'rgba(0, 0, 0, 0.3)',
                    transition: 'color 0.3s ease',
                  },
                  '&:hover': {
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                      backgroundColor: 'rgb(238, 238, 238)',
                      opacity: 0.5,
                      zIndex: -1,
                    },
                    '&::after': {
                      color: 'rgb(52, 207, 161)',
                    },
                  },
                  background: 'none',
                  width: '2rem',
                  height: '2rem',
                  zIndex: 2,
                  top: '50%',
                  transform: 'translateY(-50%)',
                },
              }}
            >
              <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  speed={800}
                  loop={true}
                  navigation={true}
                  pagination={{
                    el: '.publications-pagination',
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                  }}
                  className="publications-swiper"
                >
                  {PUBLICATION_IMAGES.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Box
                        component="img"
                        src={image}
                        alt={`Publication ${index + 1}`}
                        onClick={() => setSelectedPublicationIndex(index)}
                        onError={(e) => {
                          console.error(`Failed to load publication image: ${image}`);
                          e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                        }}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          display: 'block',
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.02)',
                          },
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
              <div className="swiper-pagination publications-pagination" />
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Project Detail Modal */}
      <Modal
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        }}
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 2,
            p: 3,
            maxWidth: '900px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            '&:focus': {
              outline: 'none',
            },
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          {selectedProject && (
            <>
              <Typography variant="h4" sx={{ mb: 2 }}>
                {selectedProject.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {selectedProject.description}
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: 2,
                }}
              >
                {selectedProject.images.map((image, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={image}
                    alt={`${selectedProject.title} - Image ${index + 1}`}
                    onClick={() => setSelectedProjectImageIndex(index)}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 1,
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                    }}
                  />
                ))}
              </Box>
            </>
          )}
        </Box>
      </Modal>

      {/* Project Gallery Modal */}
      <Modal
        open={selectedProjectImageIndex !== null && !!selectedProject}
        onClose={() => setSelectedProjectImageIndex(null)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          },
          '& .MuiModal-backdrop': {
            outline: 'none',
          },
        }}
        slotProps={{
          backdrop: {
            sx: { outline: 'none' }
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '90%',
            height: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            outline: 'none',
          }}
        >
          <IconButton
            onClick={() => setSelectedProjectImageIndex(null)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: 'white',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              zIndex: 10,
              padding: '8px',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '& .swiper': {
                width: '100%',
                height: '100%',
              },
              '& .swiper-button-prev, & .swiper-button-next': {
                color: 'white',
                '&::after': {
                  fontSize: '2rem',
                },
                '&:hover': {
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    zIndex: -1,
                    transition: 'background-color 0.3s ease',
                  },
                  '&::after': {
                    color: 'rgb(52, 207, 161)',
                  },
                },
              },
            }}
          >
            {selectedProject && (
              <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                initialSlide={selectedProjectImageIndex || 0}
                onSlideChange={(swiper: SwiperType) => setSelectedProjectImageIndex(swiper.activeIndex)}
              >
                {selectedProject.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Box
                      component="img"
                      src={image}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      sx={{
                        maxWidth: '90%',
                        maxHeight: '90%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Box>
        </Box>
      </Modal>

      {/* Publications Full Screen Gallery Modal */}
      <Modal
        open={selectedPublicationIndex !== null}
        onClose={() => setSelectedPublicationIndex(null)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          },
          '& .MuiModal-backdrop': {
            outline: 'none',
          },
        }}
        slotProps={{
          backdrop: {
            sx: { outline: 'none' }
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '90%',
            height: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            outline: 'none',
          }}
        >
          <IconButton
            onClick={() => setSelectedPublicationIndex(null)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: 'white',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              zIndex: 10,
              padding: '8px',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '& .swiper': {
                width: '100%',
                height: '100%',
              },
              '& .swiper-button-prev, & .swiper-button-next': {
                color: 'white',
                '&::after': {
                  fontSize: '2rem',
                },
                '&:hover': {
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    zIndex: -1,
                    transition: 'background-color 0.3s ease',
                  },
                  '&::after': {
                    color: 'rgb(52, 207, 161)',
                  },
                },
              },
            }}
          >
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
              initialSlide={selectedPublicationIndex || 0}
              onSlideChange={(swiper: SwiperType) => setSelectedPublicationIndex(swiper.activeIndex)}
            >
              {PUBLICATION_IMAGES.map((image, index) => (
                <SwiperSlide key={index}>
                  <Box
                    component="img"
                    src={image}
                    alt={`Publication ${index + 1}`}
                    sx={{
                      maxWidth: '90%',
                      maxHeight: '90%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Modal>

      {/* Contact section */}
      <Box
        id="contact"
        sx={{
          height: '100vh',
          width: '100%',
          scrollSnapAlign: 'start',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {/* Map Section */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            bgcolor: '#333',
            position: 'relative',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0448543384584!2d14.425198776772714!3d50.09911897942825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94b52139e2d1%3A0x7c3886c8a2c9c194!2zS29zdGVsbsOtIDExMDMvMTQsIDE3MCAwMCBQcmFoYSA3LUhvbGXFoW92aWNl!5e0!3m2!1sen!2scz!4v1710373391241!5m2!1sen!2scz"
            width="100%"
            height="100%"
            title="Atelier DVA Location Map"
            style={{
              border: 0,
              filter: 'grayscale(1) contrast(1.1)',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

        {/* Contact Info Section */}
        <Box
          sx={{
            bgcolor: '#3C6E71',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
          }}
        >
          <Box
            sx={{
              maxWidth: '400px',
              width: '100%',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 400,
                mb: 4,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                textAlign: 'center',
              }}
            >
              Kostelní 1103/14
              <br />
              Praha 7 - Holešovice
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: 'white',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 400,
                mb: 3,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                textAlign: 'center',
              }}
            >
              +420 123 456 789
            </Typography>

            <Typography
              variant="h3"
              component="a"
              href="mailto:info@atelierdva.cz"
              sx={{
                display: 'block',
                color: 'white',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 400,
                textDecoration: 'none',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                textAlign: 'center',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              info@atelierdva.cz
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home; 