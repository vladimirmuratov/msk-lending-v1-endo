import { Box, Typography } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { memo } from 'react';

export const WhyWeBlock = memo(() => {
    return (
        <Box
            component="section"
            id="whyWe"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography
                variant="h2"
                sx={{
                    color: 'var(--red)',
                    marginBottom: '20px',
                    fontSize: { xs: '22px', sm: '34px' },
                    fontWeight: 300,

                }}
            >
                Наши преимущества
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)' }} />
                    <Typography
                        variant="h3"
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Используем новейшие роботизированные комплексы <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>MAKO, ROSA, Navio</Box>
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)' }} />
                    <Typography
                        variant="h3"
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Организуем операции в ведущих клиниках Москвы
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)' }} />
                    <Typography
                        variant="h3"
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Госпитализация без ОМС, в том числе из регионов России и стран СНГ
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)' }} />
                    <Typography
                        variant="h3"
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Опыт хирургов — более 15 лет, международная практика
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)' }} />
                    <Typography
                        variant="h3"
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Комфортные палаты и круглосуточный уход
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)' }} />
                    <Typography
                        variant="h3"
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Возможность экстренной и плановой операции
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
});
