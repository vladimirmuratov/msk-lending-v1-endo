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
                component="article"
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

                <Typography component="p"
                            sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    Мы не просто делаем эндопротезирование коленных и тазобедренных суставов — мы привлекаем в
                    операционную роботов (да, как в фантастических фильмах, только гораздо практичнее). Такую технологию
                    пока используют избранные клиники в Москве — потому что она действительно шагнула далеко вперёд по
                    сравнению с традиционными методами.
                </Typography>
                <Typography component="p"
                            sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    Когда робот-хирург работает вместе с доктором, точность подгонки протеза становится почти ювелирной.
                    Если по-простому: имплант садится настолько идеально, будто был создан именно под ваш сустав, а не
                    взят «по среднему размеру». За счёт этого рана минимальная, мышцы вокруг сустава почти не страдают,
                    и человек возвращается к привычной жизни на порядок быстрее — иногда разница в сроках восстановления
                    просто удивляет даже опытных специалистов.
                </Typography>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                    Короче, сочетая человеческий опыт и машинную точность, мы снижаем риски ошибок и повышаем шансы
                    забыть о боли в суставе надолго. Это не про будущее – это уже здесь и сейчас.
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
                component="article"
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

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
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
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Минимальная
                                травматичность</Box> — меньше повреждений тканей, нервов и сосудов
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Меньше боли и
                                отёков</Box> — точные разрезы и деликатное вмешательство
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Быстрое
                                восстановление</Box> — в 1, 5–2 раза быстрее, чем после обычной операции
                        </Typography>
                    </Box>
                </Box>

                <Typography
                    component="p"
                    sx={{
                        fontSize: { xs: 18, sm: 20 },
                        color: 'var(--main-color)',
                        marginBottom: '10px',
                        marginTop: '15px'
                    }}
                >
                    Здесь робот — по сути ваш персональный навигатор. Он сканирует строение именно вашего сустава и
                    подсказывает хирургу, как поставить протез с точностью до полумиллиметра (представьте: это примерно
                    толщина листа бумаги! ). Что это даёт на практике? Для начала — минимальное вмешательство: ткани,
                    нервы и сосуды затрагиваются куда меньше, чем при стандартной операции.
                </Typography>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                    В результате послеоперационная боль и отёки становятся вовсе не такой уж большой проблемой — потому
                    что разрезы аккуратные, а вмешательство щадящее. И вот тут заметна настоящая магия: люди
                    восстанавливаются почти вдвое быстрее, возвращаясь к привычному образу жизни гораздо раньше, чем
                    обычно ожидали бы от подобных операций.
                </Typography>

            </Box>

            <Box
                component="article"
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
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Артроз III–IV стадии
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Когда вообще приходит время задуматься об эндопротезировании сустава? Вот, казалось бы,
                            терпишь боль, мажешь мази — но в какой момент нужно решиться на операцию? Обычно этот шаг
                            обсуждают с врачом уже при артрозе третьей-четвертой стадии — когда сустав буквально
                            "съеден", каждый шаг дается с трудом, а обезболивающие уже как родные. Представьте себе
                            дверь, которую раз за разом хлопают всё сильнее — петли истираются, дерево трескается, и вот
                            однажды она почти перестает открываться.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Асептический некроз головки бедренной кости
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Еще одна частая причина — асептический некроз головки бедренной кости. По сути, это когда
                            кровоснабжение бедра нарушается настолько сильно, что ткань начинает отмирать. Это очень
                            болезненное и быстро прогрессирующее состояние; обычным лечением тут не отделаешься.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Ревматоидный артрит
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Ревматоидный артрит тоже часто приводит людей в операционную. В этом случае суставы
                            разрушает не время, а собственная иммунная система — человек как бы “сам себя ранит”
                            изнутри. Это похоже на то, как если бы на вашу любимую мебель в доме вдруг начала нападать
                            домашняя собака.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Последствия переломов и травм
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Ну и ещё есть последствия тяжелых переломов или травм, когда после всех попыток восстановить
                            движение сустав все равно работает сбоем: болит или двигается очень ограниченно. Деформации
                            и скованность движения становятся настолько выраженными, что человеку приходится буквально
                            подстраивать всю свою жизнь под это ограничение — планировать маршрут по количеству ступенек
                            и избегать лишних движений.
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Деформации и ограничение подвижности суставов
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            В общем, если никакие другие методы уже не помогают вернуть движение и облегчить боль —
                            эндопротезирование становится тем самым шансом снова почувствовать себя хозяином
                            собственного тела.
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box
                component="article"
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

                <Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '15px',
                        fontSize: { xs: 18, sm: 20 },
                        fontWeight: 400
                    }}
                >
                    Давайте разберёмся, как реально выглядит процесс роботизированной операции — не сухая техническая
                    последовательность, а почти инженерный квест в медицине.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Трёхмерное моделирование — создаём 3D-модель сустава и планируем каждый миллиметр
                                операции
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Всё начинается с трёхмерного моделирования. Представьте: мы не просто изучаем «плоские»
                            снимки, а строим полноценную 3D-карту вашего сустава — каждый бугорок видим со всех сторон,
                            можем крутить-вертеть (почти как дизайнер над сложной деталью). На этом этапе хирурги вместе
                            с системой вырисовывают идеальный план: сколько отпилить, где установить имплантат, чтобы
                            новое сочленение работало как ваше родное.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Навигация в реальном времени — робот контролирует точность движений хирурга
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Дальше подключается навигация в реальном времени. Вот тут роботы раскрывают свой потенциал:
                            они будто бы следят за каждым движением руки хирурга — и если тот отклоняется хоть на пару
                            миллиметров от плана, система тут же сигнализирует. Можно сказать, хирург и техника работают
                            тандемом: человек принимает решения, робот страхует точность.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Установка эндопротеза — с минимальным вмешательством
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Теперь сама установка эндопротеза. Благодаря всей подготовке и технике вмешательство
                            становится минимальным — меньше разрезов, ниже риск ошибок, восстановление обычно проходит
                            легче (пациенты вообще часто удивляются, как быстро возвращается подвижность).
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Финальная проверка — система оценивает нагрузку и стабильность сустава
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Ну и финальный аккорд — проверка системы на «прочность». Программа прямо на месте
                            просчитывает нагрузки: выдержит ли сустав ваш привычный ритм жизни? Всё должно быть
                            стабильно, без перекосов и неточностей. На этом этапе операция для пациента заканчивается —
                            и начинается его новая история движения.
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            color: 'var(--main-color)',
                            marginTop: '15px',
                            fontSize: { xs: 18, sm: 20 },
                            fontWeight: 400
                        }}
                    >
                        Вот такая «закулисье» современной хирургии; удивительно технологичная штука — но главную роль
                        всё равно играет специалист с вниманием к деталям и доверием к своим умным помощникам.
                    </Typography>

                </Box>
            </Box>

            <Box
                component="article"
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
                    <Box sx={{ marginBottom: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Вставание на ноги уже через 24 часа
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Начнем с главного — возвращаться к привычной жизни вы начнете буквально на следующий день.
                            Уже через сутки после операции пациента поднимают на ноги — пусть это и звучит немного
                            неожиданно, но ранняя активность помогает ускорить восстановление и уменьшает риск
                            осложнений.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Полная нагрузка на сустав — через 2–4 недели
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Полную нагрузку на прооперированный сустав допустимо давать спустя 2–4 недели (здесь всё
                            зависит от индивидуальных особенностей и хода заживления).
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Индивидуальная программа восстановления
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            И дальше — не придётся идти вслепую. Восстановительная программа всегда подбирается
                            персонально: кто-то быстрее набирает форму, кто-то сталкивается с трудностями вроде слабости
                            или опасения сделать лишний шаг — тут мы вместе выстраиваем маршрут, чтобы каждое упражнение
                            было "по зубам", но при этом двигало к цели.
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Патронаж и контроль состояния после выписки
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Пациента после выписки никто не бросает в одиночку разбираться со всем этим — продолжается
                            патронаж, врач следит за состоянием, корректирует рекомендации и отвечает на все возникающие
                            вопросы. Это похоже на сопровождение проводника в горах: да, основное восхождение позади, но
                            впереди ещё важный участок пути, где поддержка особенно ценна.
                        </Typography>
                    </Box>

                </Box>
            </Box>

        </Box>
    );
});
