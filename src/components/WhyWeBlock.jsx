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
                Что реально отличает нас?
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                    <Typography
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Если быть откровенными — здесь всё строится вокруг современных технологий и опыта людей. Мы
                        оперируем на системах <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>MAKO,
                        ROSA, Navio</Box> — это, по сути, "умные руки" хирургов, позволяющие
                        невероятно точно спланировать движение и действие каждого инструмента (сравните с тем, как
                        художник использует планшет вместо бумаги — может мгновенно внести коррективы).
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                    <Typography
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Мы работаем только в проверенных московских клиниках: те самые места, где каждый день спасают
                        сотни жизней и где персонал ловко справляется даже с нештатными ситуациями.
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                    <Typography
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Страховка ОМС — хорошо, но у нас есть возможность организовать госпитализацию "по частной
                        линии". И если вы живёте далеко от Москвы — вопрос тоже решаемый: мы принимаем пациентов из
                        других регионов России и стран СНГ.
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                    <Typography
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Врачи здесь не "стреляют глазами" на операционной практике: большинство за плечами держит больше
                        15 лет операций (и часть этого времени провели за границей — перенимали опыт там, где медицина
                        шла впереди).
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                    <Typography
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Отдельно стоит отметить быт: палаты не похожи на казённые больничные стены. Это скорее
                        мини-отель — спокойная обстановка, удобства, круглосуточное внимание (даже ночью можно
                        рассчитывать на помощь дежурных).
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                    <Typography
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        И последнее: экстренная ситуация или плановая операция? Здесь не нужно ждать очередей и
                        согласований неделями. Всё решается быстро, координируется на месте.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
});
