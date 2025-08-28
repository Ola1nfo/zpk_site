import "./AdmissionRules.scss"
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';


//img
import rulesPDF from "./file/Правила прийому_2025скан.pdf"
import FaceIcon from '@mui/icons-material/Face'
import PersonIcon from '@mui/icons-material/Person'


export default function AdmissionRules() {
    return (
        <div>
            <Header/>
            <div className="detail container">
                <h2>Цікавишся деталями вступу до нашого закладу освіти?</h2>
                <p>Тоді тобі потрібно ознайомитися з правилами прийому. Обирай та натискай свою кнопку!</p>
                <a href={rulesPDF} className="btn btn-pravyla me-2">Правила прийому</a>
                <div className="profession-box">
                    <h2>Професії та спеціальності</h2>
                    <p>Наші професії актуальні та затребувані на ринку праці</p>
                </div>
                <div className="tabs-section">
                    <Tabs aria-label="Basic tabs" defaultValue={0}>
                        <TabList className="tabList">
                            <Tab><FaceIcon /> на базі 9 класів</Tab>
                            <Tab><PersonIcon /> на базі 11 класів</Tab>
                        </TabList>
                        <TabPanel value={0}>
                            <b>First</b> tab panel
                        </TabPanel>
                        <TabPanel value={1}>
                            <b>Second</b> tab panel
                        </TabPanel>
                    </Tabs>
                </div>
                <Card
                    variant="outlined"
                    orientation="horizontal"
                    sx={{
                        width: 320,
                        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                    }}
                    >
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                        <img
                        src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                        srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                        loading="lazy"
                        alt=""
                        />
                    </AspectRatio>
                    <CardContent>
                        <Typography level="title-lg" id="card-description">
                        Yosemite Park
                        </Typography>
                        <Typography
                        level="body-sm"
                        aria-describedby="card-description"
                        sx={{ mb: 1 }}
                        >
                        <Link
                            overlay
                            underline="none"
                            href="#interactive-card"
                            sx={{ color: 'text.tertiary' }}
                        >
                            California, USA
                        </Link>
                        </Typography>
                        <Chip
                        variant="outlined"
                        color="primary"
                        size="sm"
                        sx={{ pointerEvents: 'none' }}
                        >
                        Cool weather all day long
                        </Chip>
                    </CardContent>
                </Card>
            </div>            
            <Footer/>
        </div>
    )
}