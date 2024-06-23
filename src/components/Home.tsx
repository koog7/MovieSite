import '../App.css'
import {Avatar} from "@mui/material";
import Batman from '../assets/img/batman.png'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Typography } from '@mui/material';

const Home = () => {

    const cards = [
        {
            title: 'Chicago Tribune',
            description: 'There’s real filmmaking here in The Batman. Matt Reeves, the director and co-writer, has a serious interest in the tantalizing Batman/Catwoman dynamic. His script, in collaboration with co-writer Peter Craig, parcels out the action sequences carefully, and when they arrive, they’re both visually lucid and excitingly reckless.',
            score: 75,
        },
        {
            title: 'Variety',
            description: 'This grounded, frequently brutal and nearly three-hour film noir registers among the best of the genre, even if — or more aptly, because — what makes the film so great is its willingness to dismantle and interrogate the very concept of superheroes.',
            score: 100,
        },
        {
            title: 'ABC News',
            description: 'Director Matt Reeves and star Robert Pattinson see the Caped Crusader as more film-noir detective than comic-book hero in their mesmerizing mindbender that aims high even when it misses the mark. It’s a grenade of pure cinema ready to blow.',
            score: 80,
        },
    ];


    return (
        <>
            <div className={'poster-block'}>
                <div className={'container'}>
                    <h1 className={'newMovie'}>They think I'm hiding in the <span className={'shadow'}>shadows</span>,
                        but I am the <span className={'shadow'}>shadows.</span>
                    </h1>
                </div>
                <img style={{marginLeft: '-110px'}} src={Batman} alt={'Terminator poster'}/>
            </div>
            <div style={{marginTop: '50px'}}>
                <h2>Critic Reviews</h2>
                <Grid container spacing={2}>
                    {cards.map((card, index) => (
                        <Grid key={index} item xs={12} sm={4}>
                            <Card sx={{backgroundColor: '#333', color: 'white', minHeight: '200px'}}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{display: 'flex'}}>
                                        <Avatar variant="rounded"
                                                sx={{margin: '-3px 5px 5px 0', backgroundColor: 'green'}}>
                                            {card.score}
                                        </Avatar>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{color: 'white'}}>
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div className="footers">
                <div className='fourcolumns'>
                    <div className='row'>
                        <div className='cloumnone'>
                            <h1>The Agency for Movies</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='columntwo'>
                            <p>BISHKEK</p>
                            <div>
                                <p className='underline'>bishkek@example.com</p>
                                <p>+996 (312) 123-456</p>
                                <p>123 Primernaya str., Bishkek, Fictional Country 720001</p>
                            </div>
                            <p className='underline'>SEE ON MAP</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='columnthree'>
                            <p>ALMATY</p>
                            <div>
                                <p className='underline'>kazakhstan@example.com</p>
                                <p>+7 (701) 234-5678</p>
                                <p>123 Primernaya str., Almaty, Fictional Country 050000</p>
                            </div>
                            <p className='underline'>SEE ON MAP</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='columnfour'>
                            <p>WANT TO BE THE SMARTEST IN YOUR OFFICE?</p>
                            <p className='underline'>SIGN UP FOR OUR NEWSLETTER</p>
                            <p>FOLLOW US</p>
                            <div className='description_page'>
                                <i className="fa fa-instagram" style={{fontSize: '24px'}}></i>
                                <i className="fa fa-facebook" style={{fontSize: '24px'}}></i>
                                <i className="fa fa-twitter" style={{fontSize: '24px'}}></i>
                                <i className="fa fa-linkedin" style={{fontSize: '24px'}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
