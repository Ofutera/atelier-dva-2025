import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <Box
        sx={{
          position: 'relative',
          height: { xs: '300px', md: '400px' },
          width: '100%',
          overflow: 'hidden',
          borderRadius: 2,
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
            zIndex: 1,
          },
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt={title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 3,
            zIndex: 2,
            color: 'white',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 1,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ProjectCard; 