--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: app_address; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE app_address (
    id integer NOT NULL,
    street character varying(200) NOT NULL,
    city character varying(200) NOT NULL,
    state character varying(200) NOT NULL,
    country character varying(200) NOT NULL,
    user_id integer
);


ALTER TABLE app_address OWNER TO shanaraegoodwin;

--
-- Name: app_address_id_seq; Type: SEQUENCE; Schema: public; Owner: shanaraegoodwin
--

CREATE SEQUENCE app_address_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE app_address_id_seq OWNER TO shanaraegoodwin;

--
-- Name: app_address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: shanaraegoodwin
--

ALTER SEQUENCE app_address_id_seq OWNED BY app_address.id;


--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE auth_group (
    id integer NOT NULL,
    name character varying(80) NOT NULL
);


ALTER TABLE auth_group OWNER TO shanaraegoodwin;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: shanaraegoodwin
--

CREATE SEQUENCE auth_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_group_id_seq OWNER TO shanaraegoodwin;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: shanaraegoodwin
--

ALTER SEQUENCE auth_group_id_seq OWNED BY auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE auth_group_permissions OWNER TO shanaraegoodwin;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: shanaraegoodwin
--

CREATE SEQUENCE auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_group_permissions_id_seq OWNER TO shanaraegoodwin;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: shanaraegoodwin
--

ALTER SEQUENCE auth_group_permissions_id_seq OWNED BY auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE auth_permission (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE auth_permission OWNER TO shanaraegoodwin;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: shanaraegoodwin
--

CREATE SEQUENCE auth_permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_permission_id_seq OWNER TO shanaraegoodwin;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: shanaraegoodwin
--

ALTER SEQUENCE auth_permission_id_seq OWNED BY auth_permission.id;


--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone NOT NULL,
    is_superuser boolean NOT NULL,
    username character varying(30) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    email character varying(75) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE auth_user OWNER TO shanaraegoodwin;

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE auth_user_groups OWNER TO shanaraegoodwin;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: shanaraegoodwin
--

CREATE SEQUENCE auth_user_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_user_groups_id_seq OWNER TO shanaraegoodwin;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: shanaraegoodwin
--

ALTER SEQUENCE auth_user_groups_id_seq OWNED BY auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: shanaraegoodwin
--

CREATE SEQUENCE auth_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_user_id_seq OWNER TO shanaraegoodwin;

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: shanaraegoodwin
--

ALTER SEQUENCE auth_user_id_seq OWNED BY auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE auth_user_user_permissions OWNER TO shanaraegoodwin;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: shanaraegoodwin
--

CREATE SEQUENCE auth_user_user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_user_user_permissions_id_seq OWNER TO shanaraegoodwin;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: shanaraegoodwin
--

ALTER SEQUENCE auth_user_user_permissions_id_seq OWNED BY auth_user_user_permissions.id;


--
-- Name: authtoken_token; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE authtoken_token (
    key character varying(40) NOT NULL,
    created timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE authtoken_token OWNER TO shanaraegoodwin;

--
-- Name: corsheaders_corsmodel; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE corsheaders_corsmodel (
    id integer NOT NULL,
    cors character varying(255) NOT NULL
);


ALTER TABLE corsheaders_corsmodel OWNER TO shanaraegoodwin;

--
-- Name: corsheaders_corsmodel_id_seq; Type: SEQUENCE; Schema: public; Owner: shanaraegoodwin
--

CREATE SEQUENCE corsheaders_corsmodel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE corsheaders_corsmodel_id_seq OWNER TO shanaraegoodwin;

--
-- Name: corsheaders_corsmodel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: shanaraegoodwin
--

ALTER SEQUENCE corsheaders_corsmodel_id_seq OWNED BY corsheaders_corsmodel.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE django_admin_log OWNER TO shanaraegoodwin;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: shanaraegoodwin
--

CREATE SEQUENCE django_admin_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_admin_log_id_seq OWNER TO shanaraegoodwin;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: shanaraegoodwin
--

ALTER SEQUENCE django_admin_log_id_seq OWNED BY django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE django_content_type (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE django_content_type OWNER TO shanaraegoodwin;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: shanaraegoodwin
--

CREATE SEQUENCE django_content_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_content_type_id_seq OWNER TO shanaraegoodwin;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: shanaraegoodwin
--

ALTER SEQUENCE django_content_type_id_seq OWNED BY django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE django_migrations OWNER TO shanaraegoodwin;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: shanaraegoodwin
--

CREATE SEQUENCE django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_migrations_id_seq OWNER TO shanaraegoodwin;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: shanaraegoodwin
--

ALTER SEQUENCE django_migrations_id_seq OWNED BY django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE django_session OWNER TO shanaraegoodwin;

--
-- Name: racekeeper_race; Type: TABLE; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE TABLE racekeeper_race (
    id integer NOT NULL,
    event character varying(100) NOT NULL,
    date date NOT NULL,
    distance double precision NOT NULL,
    "bibNumber" integer,
    "finishTime" integer NOT NULL,
    "totalinRace" integer,
    "overallPlace" integer,
    "totalinGender" integer,
    "genderPlace" integer,
    "totalinDivision" integer,
    "divisionPlace" integer,
    user_id integer NOT NULL,
    location character varying(100),
    latitude double precision,
    longitude double precision
);


ALTER TABLE racekeeper_race OWNER TO shanaraegoodwin;

--
-- Name: racekeeper_race_id_seq; Type: SEQUENCE; Schema: public; Owner: shanaraegoodwin
--

CREATE SEQUENCE racekeeper_race_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE racekeeper_race_id_seq OWNER TO shanaraegoodwin;

--
-- Name: racekeeper_race_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: shanaraegoodwin
--

ALTER SEQUENCE racekeeper_race_id_seq OWNED BY racekeeper_race.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY app_address ALTER COLUMN id SET DEFAULT nextval('app_address_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY auth_group ALTER COLUMN id SET DEFAULT nextval('auth_group_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('auth_group_permissions_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY auth_permission ALTER COLUMN id SET DEFAULT nextval('auth_permission_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY auth_user ALTER COLUMN id SET DEFAULT nextval('auth_user_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY auth_user_groups ALTER COLUMN id SET DEFAULT nextval('auth_user_groups_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('auth_user_user_permissions_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY corsheaders_corsmodel ALTER COLUMN id SET DEFAULT nextval('corsheaders_corsmodel_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY django_admin_log ALTER COLUMN id SET DEFAULT nextval('django_admin_log_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY django_content_type ALTER COLUMN id SET DEFAULT nextval('django_content_type_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY django_migrations ALTER COLUMN id SET DEFAULT nextval('django_migrations_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY racekeeper_race ALTER COLUMN id SET DEFAULT nextval('racekeeper_race_id_seq'::regclass);


--
-- Data for Name: app_address; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY app_address (id, street, city, state, country, user_id) FROM stdin;
\.


--
-- Name: app_address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: shanaraegoodwin
--

SELECT pg_catalog.setval('app_address_id_seq', 1, true);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY auth_group (id, name) FROM stdin;
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: shanaraegoodwin
--

SELECT pg_catalog.setval('auth_group_id_seq', 1, false);


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: shanaraegoodwin
--

SELECT pg_catalog.setval('auth_group_permissions_id_seq', 1, false);


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add permission	1	add_permission
2	Can change permission	1	change_permission
3	Can delete permission	1	delete_permission
4	Can add group	2	add_group
5	Can change group	2	change_group
6	Can delete group	2	delete_group
7	Can add user	3	add_user
8	Can change user	3	change_user
9	Can delete user	3	delete_user
10	Can add content type	4	add_contenttype
11	Can change content type	4	change_contenttype
12	Can delete content type	4	delete_contenttype
13	Can add session	5	add_session
14	Can change session	5	change_session
15	Can delete session	5	delete_session
16	Can add log entry	6	add_logentry
17	Can change log entry	6	change_logentry
18	Can delete log entry	6	delete_logentry
19	Can add address	7	add_address
20	Can change address	7	change_address
21	Can delete address	7	delete_address
22	Can add token	8	add_token
23	Can change token	8	change_token
24	Can delete token	8	delete_token
25	Can add cors model	9	add_corsmodel
26	Can change cors model	9	change_corsmodel
27	Can delete cors model	9	delete_corsmodel
28	Can add Race	10	add_race
29	Can change Race	10	change_race
30	Can delete Race	10	delete_race
\.


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: shanaraegoodwin
--

SELECT pg_catalog.setval('auth_permission_id_seq', 30, true);


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
3	pbkdf2_sha256$15000$0R8VFSzaEtP0$raGyZe9PcJEx7XjDlubZViZ9s9ENBbN4IEHKEPObNlk=	2015-03-04 17:16:31-08	t	loki	Loki	Goodwin	shanarae+1@gmail.com	f	t	2015-03-04 17:16:31-08
4	pbkdf2_sha256$15000$tCFCyVtaOcx7$/+MpzVVsKCcrCgfDH/k0TXQSNdcEnUl7dWemzx/rnxo=	2015-03-08 11:28:36.527626-07	t	miwok	Miwok	Goodwin	shanarae+1@gmail.com	t	t	2015-03-05 15:59:49-08
6		2015-03-08 21:06:14.824296-07	f	gilesgoodwin	giles	goodwin	gilesgoodwin@yahoo.com	f	t	2015-03-08 21:06:14.824352-07
7	pbkdf2_sha256$15000$bJqV73uiweZs$p6nrfbXGAbnnWVkRc0w+4jc5IxMM0GA/318nPAGP83s=	2015-03-08 21:27:06.029211-07	f	lokigoodwin			loki@gmail.com	f	t	2015-03-08 21:27:06.029349-07
8	pbkdf2_sha256$15000$0y39hGaoeGei$uVXjt7qD2scwAWDswOGB85q+RScfgWlfZuvZmzmv4Xo=	2015-03-08 21:29:07.046534-07	f	miwokgoodwin	Miwok	Goodwin	miwok@gmail.com	f	t	2015-03-08 21:29:07.04658-07
9	pbkdf2_sha256$15000$HJdUaOLAglAw$JDqp2uBJGuVvgW1mKDPAEF4wlVwbLfemwZWhgBTWVbE=	2015-03-08 21:31:11.990683-07	f	peanutbutter	Peanut	Butter	peanut21@gmail.com	f	t	2015-03-08 21:31:11.99077-07
10	pbkdf2_sha256$15000$NrgmOWHp2zUg$+ca53UHYBfAZMyzAhSO0n1E7+5XNScNq5ZE0C1JovUg=	2015-03-08 21:36:59.367222-07	f	darkchocolate	Dark	Chocolate	choc@gmail.com	f	t	2015-03-08 21:36:59.36727-07
11	pbkdf2_sha256$15000$klSnKLRFr6e7$dTcaaqN8S3r16PzxxTNPQUJ8DLxuBHrCphq6VJnje18=	2015-03-08 21:38:14.202847-07	f	milky	Milk	Chocolate	milky@gmail.com	f	t	2015-03-08 21:38:14.202897-07
12	pbkdf2_sha256$15000$940OI7YRaALg$cCxhyQqNJ+EVzkt8CsyL6L0RzkK6/Mc/1VjpXQFeX1c=	2015-03-08 21:39:22.318931-07	f	kale	kale	goodwin	kale@gmail.com	f	t	2015-03-08 21:39:22.318979-07
14	pbkdf2_sha256$15000$ZAQ0Z5Us0oIy$tEZEfqXvxpdXgBLX8KCYO5Pb41/RF4DKPKwtZEkGjzc=	2015-03-13 20:04:05.548874-07	f	phatmiwok	Phat	Miwok	phatmiwok@aol.com	f	t	2015-03-13 20:04:05.549298-07
15	pbkdf2_sha256$15000$tJDQglduudJt$ayX2NH7qVaVq/0RdTZ/NIZDI4nfoi5al63mEeow6mXM=	2015-03-13 20:05:31.565461-07	f	fatloki	Fat	Loki	fatloki@yahoo.com	f	t	2015-03-13 20:05:31.565518-07
16	pbkdf2_sha256$15000$kDe0hnHFseHa$RI/5XSlVh9K1JcCg8jR9KAt1RCZ8QgC+bGYAjlvSlLs=	2015-03-16 17:37:19.738197-07	f	newmember	New Member	Goodwin	new@gmail.com	f	t	2015-03-16 17:37:19.738243-07
2	pbkdf2_sha256$15000$wwfSFthhbQ8u$I5K3VTtQeH3gzfTGqjSIXM2S5MOEPOCBPQbeXjhB17g=	2015-03-19 15:35:05.72552-07	t	shanarae	Shanarae	Goodwin	shanarae@gmail.com	t	t	2015-03-04 15:15:04-08
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: shanaraegoodwin
--

SELECT pg_catalog.setval('auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: shanaraegoodwin
--

SELECT pg_catalog.setval('auth_user_id_seq', 16, true);


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: shanaraegoodwin
--

SELECT pg_catalog.setval('auth_user_user_permissions_id_seq', 1, false);


--
-- Data for Name: authtoken_token; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY authtoken_token (key, created, user_id) FROM stdin;
a696c41be672a1f65941355b770453c22a2e4e64	2015-03-04 15:15:04.625607-08	2
5d6cc5025fdc60780a8d1c815c793c716ca3c650	2015-03-04 17:16:31.524627-08	3
fb9372f4ac24ad2102b8ceee2580ed721b691d20	2015-03-05 15:59:49.482931-08	4
7257a79b8a535b0658ca4c4e92f6ddebc1e69665	2015-03-08 21:06:14.835545-07	6
5eb87bc4138cb4f03c795e164d41bd17b164632c	2015-03-08 21:27:06.121223-07	7
6ccbce2471edadb9e0ac1b2c03fc4023683bda1b	2015-03-08 21:29:07.143006-07	8
220d4d824b62a8f9b50a2a42bda14a2d275336b5	2015-03-08 21:31:12.095725-07	9
c029183d284be0cc2fa789c59ba4ab15631ba921	2015-03-08 21:36:59.472552-07	10
0fcd3d8b10dbabb28bcab29c8e9053eb03890a5a	2015-03-08 21:38:14.303547-07	11
e388b3f7abf0cd13449d5e4fa8af89533e863c3a	2015-03-08 21:39:22.423907-07	12
62db5100fd304e91481e02219f6bc0b701e07eb6	2015-03-13 20:04:05.704984-07	14
b31d6a6f2dadd50ea611c83fb5afdb39cfa2d6f2	2015-03-13 20:05:31.660736-07	15
912eeec4e8bc87fe189eaa9622e4baecb56f87a2	2015-03-16 17:37:19.84993-07	16
\.


--
-- Data for Name: corsheaders_corsmodel; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY corsheaders_corsmodel (id, cors) FROM stdin;
\.


--
-- Name: corsheaders_corsmodel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: shanaraegoodwin
--

SELECT pg_catalog.setval('corsheaders_corsmodel_id_seq', 1, false);


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
2	2015-03-04 16:03:02.357638-08	1	shanaraegoodwin	3		3	2
3	2015-03-05 15:57:02.903652-08	3	loki	2	Changed is_superuser.	3	2
4	2015-03-05 15:58:35.425997-08	3	loki	2	Changed password.	3	2
5	2015-03-05 15:58:53.345263-08	3	loki	2	Changed first_name, last_name and email.	3	2
6	2015-03-05 15:59:49.483725-08	4	miwok	1		3	2
7	2015-03-05 15:59:57.865636-08	4	miwok	2	Changed is_superuser.	3	2
8	2015-03-05 16:00:11.444623-08	4	miwok	2	Changed is_staff.	3	2
9	2015-03-05 16:00:23.262813-08	4	miwok	2	Changed first_name, last_name and email.	3	2
10	2015-03-09 11:01:30.233482-07	5	g	3		3	2
11	2015-03-09 11:01:38.864598-07	13	ilovelunch	3		3	2
12	2015-03-16 15:46:10.703429-07	2	shanarae	2	Changed first_name and last_name.	3	2
\.


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: shanaraegoodwin
--

SELECT pg_catalog.setval('django_admin_log_id_seq', 12, true);


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY django_content_type (id, name, app_label, model) FROM stdin;
1	permission	auth	permission
2	group	auth	group
3	user	auth	user
4	content type	contenttypes	contenttype
5	session	sessions	session
6	log entry	admin	logentry
7	address	app	address
8	token	authtoken	token
9	cors model	corsheaders	corsmodel
10	Race	racekeeper	race
\.


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: shanaraegoodwin
--

SELECT pg_catalog.setval('django_content_type_id_seq', 10, true);


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2015-03-04 11:40:05.544126-08
2	auth	0001_initial	2015-03-04 11:40:05.621346-08
3	admin	0001_initial	2015-03-04 11:40:05.658162-08
4	app	0001_initial	2015-03-04 11:40:05.695192-08
5	app	0002_remove_address_user	2015-03-04 11:40:05.753732-08
6	app	0003_address_user	2015-03-04 11:40:05.809862-08
7	authtoken	0001_initial	2015-03-04 11:40:05.840429-08
8	sessions	0001_initial	2015-03-04 11:40:05.855125-08
9	racekeeper	0001_initial	2015-03-04 17:27:42.279809-08
10	racekeeper	0002_race_location	2015-03-09 15:58:02.215323-07
11	racekeeper	0003_auto_20150310_1827	2015-03-10 16:27:26.627297-07
12	racekeeper	0004_auto_20150317_1351	2015-03-17 11:51:33.829117-07
\.


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: shanaraegoodwin
--

SELECT pg_catalog.setval('django_migrations_id_seq', 12, true);


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY django_session (session_key, session_data, expire_date) FROM stdin;
sf3k8idqw9ggbgcj5cln9kqgk30zh19q	MTczYTQ4YTJhYjVjMTU5NzEwM2IzNWQwNGMxMTViOTVkMDg3YzI2Zjp7Il9hdXRoX3VzZXJfaGFzaCI6IjlmOWRjNTZmZjc2YzVlZjVjZDg1Y2NkNTE4YzAxOGQwZDQzNzI1ZTYiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOjF9	2015-03-18 12:44:08.464546-07
2t719wqq4a6lqrb92jy2z0t06glmwc27	YjI3YmFmMzc0MzZiZTlmZjYzY2E3ZjNmMmMxMzFjMTBkYjA3NzQ3Nzp7Il9hdXRoX3VzZXJfaGFzaCI6IjFkMGMxZjkyZWNhNDQxNDY0YTU0NDM2MjliZDQ4Yjg3MWQxOWY2YjkiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOjJ9	2015-03-22 20:03:38.809227-07
03nqgtyhbq11zjxeeymtuu7lckc6y1ek	YjI3YmFmMzc0MzZiZTlmZjYzY2E3ZjNmMmMxMzFjMTBkYjA3NzQ3Nzp7Il9hdXRoX3VzZXJfaGFzaCI6IjFkMGMxZjkyZWNhNDQxNDY0YTU0NDM2MjliZDQ4Yjg3MWQxOWY2YjkiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOjJ9	2015-04-02 15:35:05.72928-07
\.


--
-- Data for Name: racekeeper_race; Type: TABLE DATA; Schema: public; Owner: shanaraegoodwin
--

COPY racekeeper_race (id, event, date, distance, "bibNumber", "finishTime", "totalinRace", "overallPlace", "totalinGender", "genderPlace", "totalinDivision", "divisionPlace", user_id, location, latitude, longitude) FROM stdin;
10	Miwok's Race	2003-03-03	3.10700000000000021	1000	840	\N	\N	\N	\N	\N	\N	4	\N	\N	\N
33	Humboldt Half Marathon	2012-10-21	13.0999999999999996	236	6469	663	191	\N	\N	55	11	2	Arcata, CA	40.8665165999999971	-124.0828396
38	San Francisco Half Marathon (2nd)	2007-07-29	13.0999999999999996	20744	6480	2057	393	1228	134	452	51	2	94127	37.7346459999999979	-122.463707999999997
68	Kaiser Half Marathon	2016-02-06	13.0999999999999996	\N	6000	\N	\N	\N	\N	\N	\N	2	San Francisco, CA	37.7749294999999989	-122.419415500000014
51	DSE Windmill 10k	2014-02-28	6.21400000000000041	1	2919	264	67	107	12	\N	\N	2	94114	37.7561437999999967	-122.432568199999992
52	DSE St Patrick's Day 5k	2010-03-12	3.10700000000000021	1	1361	283	53	120	6	\N	\N	2	94115	37.7877521999999999	-122.43823070000002
55	Run Wild for a Child 5k	2011-11-25	3.10700000000000021	1407	1389	870	72	\N	\N	111	3	2	94116	37.7432421000000033	-122.497667999999976
44	US Half Marathon	2008-11-02	13.0999999999999996	950	6900	2415	615	1334	170	481	67	2	94104	37.7911148000000026	-122.402127300000018
26	Eugene Marathon	2014-07-27	26.1999999999999993	1679	13409	1361	441	576	103	83	8	2	97401	44.0637173000000004	-123.084706100000005
67	Presidio 10k	2016-04-17	6.21400000000000041	\N	3239	\N	\N	\N	\N	\N	\N	2	San Francisco, CA	37.7749294999999989	-122.419415500000014
69	Leadville 100 Run	2016-08-21	100	\N	46800	\N	\N	\N	\N	\N	\N	2	Leadville, CO	39.2508229000000028	-106.292523800000026
81	My first 50k	2016-12-30	31.0689999999999991	\N	25200	\N	\N	\N	\N	\N	\N	2	Alaska	64.2008412999999933	-149.493673300000012
25	Eugene Marathon	2013-04-27	26.1999999999999993	2980	13442	2565	847	1221	269	210	56	2	97402	44.0431493000000032	-123.225918100000001
56	DSE Rainbow Falls 5k	2012-05-27	3.10700000000000021	1	1330	139	35	61	6	\N	\N	2	94117	37.7717184999999986	-122.44389289999998
40	San Francisco Half Marathon (2nd)	2009-07-26	13.0999999999999996	30002	6660	2819	617	1678	195	595	89	2	94129	37.7933230000000009	-122.46653839999999
66	Bridge to Bridge 5k	2015-10-04	3.10700000000000021	\N	1375	\N	\N	\N	\N	\N	\N	2	San Francisco, CA	37.7749294999999989	-122.419415500000014
65	California International Marathon	2015-12-04	26.1999999999999993	\N	13200	\N	\N	\N	\N	\N	\N	2	Sacramento, CA	38.5815719000000001	-121.494399600000008
53	Big Sur 5k	2010-04-25	3.10700000000000021	9622	1421	794	162	479	55	50	6	2	Big Sur, CA	36.2704212000000012	-121.807975999999996
54	See Jane Run 5k	2011-06-05	3.10700000000000021	573	1497	\N	\N	1443	28	309	3	2	Alameda, CA	37.7652064999999979	-122.241635500000029
41	San Francisco Half Marathon (2nd)	2010-07-25	13.0999999999999996	15005	6180	3467	372	2015	96	657	36	2	94119	37.7922154000000035	-122.392006299999991
39	San Francisco Half Marathon (2nd)	2008-08-03	13.0999999999999996	21001	6420	2014	374	1160	103	405	42	2	94120	37.7899999999999991	-122.399999999999977
23	California International Marathon	2010-12-03	26.1999999999999993	2638	14422	5887	2329	2543	677	435	136	2	95811	38.5967127999999988	-121.494173799999999
57	DSE Rainbow Falls 5k	2012-06-17	3.10700000000000021	1	1335	207	54	81	8	\N	\N	2	94118	37.7822890999999998	-122.463707999999997
58	DSE St Patrick's Day 5k	2014-03-07	3.10700000000000021	1	1356	308	62	132	11	\N	\N	2	94121	37.7813453999999993	-122.497667999999976
34	Kaiser Half Marathon	2010-02-05	13.0999999999999996	266	6138	6096	178	3378	178	505	27	2	94122	37.759748100000003	-122.475029199999994
27	Berkeley Half Marathon	2013-11-23	13.0999999999999996	2490	6525	4682	1039	2526	306	396	38	2	Berkeley, CA	37.8715925999999996	-122.272746999999981
29	Crazy Horse Half Marathon	2011-10-02	13.0999999999999996	472	6565	537	76	345	24	58	8	2	Hill City, SD	43.9324854999999985	-103.575193000000013
24	California International Marathon	2013-12-06	26.1999999999999993	3248	14482	6435	2740	\N	\N	513	150	2	95814	38.582493300000003	-121.494173799999999
49	Leadville 10k	2014-08-10	6.21400000000000041	195	3485	397	133	174	40	51	15	2	80429	39.2999999999999972	-106.259999999999991
31	Kaiser Half Marathon	2007-02-01	13.0999999999999996	3173	6720	\N	\N	2506	469	\N	\N	2	94107	37.7618241999999995	-122.398587099999986
32	Kaiser Half Marathon	2008-02-01	13.0999999999999996	335	6600	4738	1232	2526	346	478	76	2	94123	37.8020404999999968	-122.43823070000002
35	Kaiser Half Marathon	2012-02-02	13.0999999999999996	407	6378	5008	1251	2499	282	407	48	2	94108	37.7909427000000022	-122.408499399999982
45	Giant Race Half Marathon	2010-06-12	13.0999999999999996	727	6873	1274	252	639	68	102	11	2	94105	37.7890183000000022	-122.391506300000003
46	Presidio 10k	2009-03-29	6.21400000000000041	1452	3129	1269	218	\N	\N	182	14	2	94109	37.7929789000000014	-122.421242399999983
36	Kaiser Half Marathon	2013-02-01	13.0999999999999996	292	6377	5753	1286	\N	\N	463	61	2	94110	37.7485823999999965	-122.418410800000004
87	A Race in the Future	2015-03-19	31.0689999999999991	\N	16230	\N	\N	\N	\N	\N	\N	2	Miami, FL	25.7616797999999996	-80.191790200000014
43	San Francisco Half Marathon (2nd)	2012-07-29	13.0999999999999996	35019	6675	4158	861	2196	237	737	86	2	94102	37.7786870999999991	-122.421242399999983
42	San Francisco Half Marathon (2nd)	2011-07-31	13.0999999999999996	32106	6540	4250	761	2370	206	800	78	2	94103	37.7726401999999979	-122.409915399999988
47	Presidio 10k	2010-04-18	6.21400000000000041	205	3143	1183	161	730	39	116	8	2	94111	37.795936200000007	-122.400003200000015
50	DSE Ft Point 10k	2014-02-21	6.21400000000000041	1	2929	292	70	144	9	\N	\N	2	94112	37.7225490999999877	-122.4410618
37	San Francisco Half Marathon (2nd)	2006-07-30	13.0999999999999996	24536	7680	2065	925	1193	403	482	176	2	94124	37.7304166999999993	-122.384424999999965
48	Leadville 10k	2012-08-12	6.21400000000000041	81	3492	342	150	139	37	45	13	2	80461	39.2750853000000006	-106.299291199999971
\.


--
-- Name: racekeeper_race_id_seq; Type: SEQUENCE SET; Schema: public; Owner: shanaraegoodwin
--

SELECT pg_catalog.setval('racekeeper_race_id_seq', 87, true);


--
-- Name: app_address_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY app_address
    ADD CONSTRAINT app_address_pkey PRIMARY KEY (id);


--
-- Name: auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions_group_id_permission_id_key; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_key UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission_content_type_id_codename_key; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_key UNIQUE (content_type_id, codename);


--
-- Name: auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups_user_id_group_id_key; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_key UNIQUE (user_id, group_id);


--
-- Name: auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions_user_id_permission_id_key; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_key UNIQUE (user_id, permission_id);


--
-- Name: auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: authtoken_token_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY authtoken_token
    ADD CONSTRAINT authtoken_token_pkey PRIMARY KEY (key);


--
-- Name: authtoken_token_user_id_key; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_key UNIQUE (user_id);


--
-- Name: corsheaders_corsmodel_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY corsheaders_corsmodel
    ADD CONSTRAINT corsheaders_corsmodel_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type_app_label_45f3b1d93ec8c61c_uniq; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY django_content_type
    ADD CONSTRAINT django_content_type_app_label_45f3b1d93ec8c61c_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: racekeeper_race_pkey; Type: CONSTRAINT; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

ALTER TABLE ONLY racekeeper_race
    ADD CONSTRAINT racekeeper_race_pkey PRIMARY KEY (id);


--
-- Name: app_address_e8701ad4; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX app_address_e8701ad4 ON app_address USING btree (user_id);


--
-- Name: auth_group_name_253ae2a6331666e8_like; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX auth_group_name_253ae2a6331666e8_like ON auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_0e939a4f; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX auth_group_permissions_0e939a4f ON auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_8373b171; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX auth_group_permissions_8373b171 ON auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_417f1b1c; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX auth_permission_417f1b1c ON auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_0e939a4f; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX auth_user_groups_0e939a4f ON auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_e8701ad4; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX auth_user_groups_e8701ad4 ON auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_8373b171; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX auth_user_user_permissions_8373b171 ON auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_e8701ad4; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX auth_user_user_permissions_e8701ad4 ON auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_51b3b110094b8aae_like; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX auth_user_username_51b3b110094b8aae_like ON auth_user USING btree (username varchar_pattern_ops);


--
-- Name: authtoken_token_key_7222ec672cd32dcd_like; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX authtoken_token_key_7222ec672cd32dcd_like ON authtoken_token USING btree (key varchar_pattern_ops);


--
-- Name: django_admin_log_417f1b1c; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX django_admin_log_417f1b1c ON django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_e8701ad4; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX django_admin_log_e8701ad4 ON django_admin_log USING btree (user_id);


--
-- Name: django_session_de54fa62; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX django_session_de54fa62 ON django_session USING btree (expire_date);


--
-- Name: django_session_session_key_461cfeaa630ca218_like; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX django_session_session_key_461cfeaa630ca218_like ON django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: racekeeper_race_e8701ad4; Type: INDEX; Schema: public; Owner: shanaraegoodwin; Tablespace: 
--

CREATE INDEX racekeeper_race_e8701ad4 ON racekeeper_race USING btree (user_id);


--
-- Name: app_address_user_id_6813cacb8fd91b98_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY app_address
    ADD CONSTRAINT app_address_user_id_6813cacb8fd91b98_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_content_type_id_508cf46651277a81_fk_django_content_type_id; Type: FK CONSTRAINT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY auth_permission
    ADD CONSTRAINT auth_content_type_id_508cf46651277a81_fk_django_content_type_id FOREIGN KEY (content_type_id) REFERENCES django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissio_group_id_689710a9a73b7457_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_group_id_689710a9a73b7457_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permission_id_1f49ccbbdc69d2fc_fk_auth_permission_id; Type: FK CONSTRAINT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permission_id_1f49ccbbdc69d2fc_fk_auth_permission_id FOREIGN KEY (permission_id) REFERENCES auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user__permission_id_384b62483d7071f0_fk_auth_permission_id; Type: FK CONSTRAINT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY auth_user_user_permissions
    ADD CONSTRAINT auth_user__permission_id_384b62483d7071f0_fk_auth_permission_id FOREIGN KEY (permission_id) REFERENCES auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups_group_id_33ac548dcf5f8e37_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_33ac548dcf5f8e37_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups_user_id_4b5ed4ffdb8fd9b0_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_4b5ed4ffdb8fd9b0_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permiss_user_id_7f0938558328534a_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permiss_user_id_7f0938558328534a_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: authtoken_token_user_id_1d10c57f535fb363_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_1d10c57f535fb363_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: djan_content_type_id_697914295151027a_fk_django_content_type_id; Type: FK CONSTRAINT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY django_admin_log
    ADD CONSTRAINT djan_content_type_id_697914295151027a_fk_django_content_type_id FOREIGN KEY (content_type_id) REFERENCES django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log_user_id_52fdd58701c5f563_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_52fdd58701c5f563_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: racekeeper_race_user_id_76a7828cb6d58f5f_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: shanaraegoodwin
--

ALTER TABLE ONLY racekeeper_race
    ADD CONSTRAINT racekeeper_race_user_id_76a7828cb6d58f5f_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: public; Type: ACL; Schema: -; Owner: shanaraegoodwin
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM shanaraegoodwin;
GRANT ALL ON SCHEMA public TO shanaraegoodwin;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

