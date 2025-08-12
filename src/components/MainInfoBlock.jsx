import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';

export const MainInfoBlock = memo(() => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingTop: { xs: '25px', sm: '50px' },
                paddingBottom: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >
            <Box
                sx={{
                    paddingBottom: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Эндопротезирование суставов нового поколения — роботизированная точность и быстрое восстановление
                </Typography>

                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}>
                    Мы организуем проведение <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>эндопротезирование
                    коленного и тазобедренного суставов</Box> в Москве с использованием
                    роботизированной хирургии. Это новейший метод, который обеспечивает идеальную точность установки
                    эндопротеза, минимальную травматичность и быстрое возвращение к активной жизни.
                </Typography>
                <Typography
                    component="p"
                    sx={{
                        fontSize: { xs: 24, sm: 26 },
                        color: 'var(--red)',
                        fontWeight: 500,
                        // marginTop: '10px',
                        paddingTop: { xs: '25px', sm: '50px' },
                }}
                >
                    Запишитесь на консультацию — начните путь к свободе движения уже сегодня.
                </Typography>
            </Box>

            <Box
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Почему роботизированная операция лучше классической
                </Typography>

                {/*<Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: '20px', sm: '24px' },
                        fontWeight: 400
                    }}
                >
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Застойная пневмония</Box> — это
                    форма воспаления лёгких, которая развивается на фоне длительного лежачего
                    положения и недостаточной вентиляции лёгких.
                    Чаще встречается у пациентов:
                </Typography>*/}

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Точность до 0, 5
                                мм</Box> —
                            робот анализирует анатомию вашего сустава и помогает хирургу установить протез идеально
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Минимальная
                                травматичность</Box> — меньше повреждений тканей, нервов и сосудов
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Меньше боли и
                                отёков</Box> — точные разрезы и деликатное вмешательство
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Быстрое
                                восстановление</Box> — в 1, 5–2 раза быстрее, чем после обычной операции
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Показания к эндопротезированию
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Артроз III–IV стадии
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Асептический некроз головки бедренной кости
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Ревматоидный артрит
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Последствия переломов и травм
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Деформации и ограничение подвижности суставов
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Как проходит роботизированная операция
                </Typography>

                {/*<Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '15px',
                        fontSize: { xs: '20px', sm: '24px' },
                        fontWeight: 400
                    }}
                >
                    Наша компания организует:
                </Typography>*/}

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Трёхмерное
                                моделирование</Box> —
                            создаём 3D-модель сустава и планируем каждый миллиметр операции
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Навигация в реальном
                                времени</Box> —
                            робот контролирует точность движений хирурга
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Установка
                                эндопротеза</Box> —
                            с минимальным вмешательством
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Финальная
                                проверка</Box> —
                            система оценивает нагрузку и стабильность сустава
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    paddingTop: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Реабилитация после операции
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Вставание на ноги уже через 24 часа
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Полная нагрузка на сустав — через 2–4 недели
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Индивидуальная программа восстановления
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Патронаж и контроль состояния после выписки
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
});
