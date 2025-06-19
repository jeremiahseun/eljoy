< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Jeremiah Erinola | Senior Fullstack Mobile Engineer</title>
                    <style>
                        * {
                            margin: 0;
                        padding: 0;
                        box-sizing: border-box;
        }

                        body {
                            font - family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        background: #0a0a0a;
                        color: #ffffff;
                        overflow-x: hidden;
                        scroll-behavior: smooth;
        }

                        /* Animated background */
                        .bg-animation {
                            position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -2;
                        background: linear-gradient(45deg, #0a0a0a, #1a1a2e, #16213e, #0f0f23);
                        background-size: 400% 400%;
                        animation: gradientShift 15s ease infinite;
        }

                        @keyframes gradientShift {
                            0 % { background- position: 0% 50%; }
                        50% {background - position: 100% 50%; }
                        100% {background - position: 0% 50%; }
        }

                        /* Floating particles */
                        .particles {
                            position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        pointer-events: none;
        }

                        .particle {
                            position: absolute;
                        width: 2px;
                        height: 2px;
                        background: #64ffda;
                        border-radius: 50%;
                        animation: float 20s infinite linear;
                        opacity: 0.6;
        }

                        @keyframes float {
                            0 % {
                                transform: translateY(100vh) translateX(0);
                opacity: 0;
                            }
            10% {opacity: 0.6; }
                        90% {opacity: 0.6; }
                        100% {
                            transform: translateY(-100px) translateX(100px);
                        opacity: 0;
            }
        }

                        /* Navigation */
                        nav {
                            position: fixed;
                        top: 0;
                        width: 100%;
                        padding: 20px 50px;
                        background: rgba(10, 10, 10, 0.9);
                        backdrop-filter: blur(20px);
                        z-index: 1000;
                        transition: all 0.3s ease;
        }

                        nav.scrolled {
                            padding: 15px 50px;
                        background: rgba(10, 10, 10, 0.95);
        }

                        .nav-container {
                            display: flex;
                        justify-content: space-between;
                        align-items: center;
                        max-width: 1400px;
                        margin: 0 auto;
        }

                        .logo {
                            font - size: 24px;
                        font-weight: 700;
                        color: #64ffda;
                        text-decoration: none;
        }

                        .nav-links {
                            display: flex;
                        list-style: none;
                        gap: 30px;
        }

                        .nav-links a {
                            color: #ffffff;
                        text-decoration: none;
                        font-weight: 500;
                        transition: color 0.3s ease;
                        position: relative;
        }

                        .nav-links a:hover {
                            color: #64ffda;
        }

                        .nav-links a::after {
                            content: '';
                        position: absolute;
                        width: 0;
                        height: 2px;
                        bottom: -5px;
                        left: 0;
                        background-color: #64ffda;
                        transition: width 0.3s ease;
        }

                        .nav-links a:hover::after {
                            width: 100%;
        }

                        /* Hero Section */
                        .hero {
                            height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        position: relative;
                        overflow: hidden;
        }

                        .hero-content {
                            max - width: 800px;
                        padding: 0 20px;
                        animation: fadeInUp 1s ease-out;
        }

                        @keyframes fadeInUp {
                            from {
                            opacity: 0;
                        transform: translateY(60px);
            }
                        to {
                            opacity: 1;
                        transform: translateY(0);
            }
        }

                        .hero h1 {
                            font - size: clamp(3rem, 8vw, 6rem);
                        font-weight: 900;
                        margin-bottom: 20px;
                        background: linear-gradient(135deg, #64ffda, #ffffff, #ff6b6b);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        animation: glow 2s ease-in-out infinite alternate;
        }

                        @keyframes glow {
                            from {filter: brightness(1); }
                        to {filter: brightness(1.2); }
        }

                        .hero .subtitle {
                            font - size: clamp(1.2rem, 3vw, 2rem);
                        color: #b0b0b0;
                        margin-bottom: 30px;
                        animation: fadeInUp 1s ease-out 0.2s both;
        }

                        .hero .description {
                            font - size: clamp(1rem, 2vw, 1.2rem);
                        color: #888;
                        margin-bottom: 40px;
                        animation: fadeInUp 1s ease-out 0.4s both;
        }

                        .cta-button {
                            display: inline-block;
                        padding: 15px 40px;
                        background: linear-gradient(135deg, #64ffda, #00bcd4);
                        color: #000;
                        text-decoration: none;
                        border-radius: 50px;
                        font-weight: 700;
                        font-size: 16px;
                        transition: all 0.3s ease;
                        animation: fadeInUp 1s ease-out 0.6s both;
                        position: relative;
                        overflow: hidden;
        }

                        .cta-button::before {
                            content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                        transition: left 0.6s;
        }

                        .cta-button:hover::before {
                            left: 100%;
        }

                        .cta-button:hover {
                            transform: translateY(-3px);
                        box-shadow: 0 20px 40px rgba(100, 255, 218, 0.3);
        }

                        /* Stats Section */
                        .stats {
                            padding: 100px 20px;
                        text-align: center;
        }

                        .stats-container {
                            max - width: 1200px;
                        margin: 0 auto;
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 40px;
        }

                        .stat-item {
                            padding: 40px 20px;
                        background: rgba(255, 255, 255, 0.05);
                        border-radius: 20px;
                        backdrop-filter: blur(10px);
                        border: 1px solid rgba(100, 255, 218, 0.2);
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

                        .stat-item:hover {
                            transform: translateY(-10px);
                        box-shadow: 0 20px 40px rgba(100, 255, 218, 0.1);
        }

                        .stat-number {
                            font - size: 3rem;
                        font-weight: 900;
                        color: #64ffda;
                        margin-bottom: 10px;
        }

                        .stat-label {
                            font - size: 1.1rem;
                        color: #b0b0b0;
        }

                        /* Skills Section */
                        .skills {
                            padding: 100px 20px;
                        background: rgba(255, 255, 255, 0.02);
        }

                        .skills-container {
                            max - width: 1400px;
                        margin: 0 auto;
                        text-align: center;
        }

                        .section-title {
                            font - size: clamp(2.5rem, 5vw, 4rem);
                        font-weight: 900;
                        margin-bottom: 60px;
                        color: #ffffff;
        }

                        .skills-categories {
                            display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        gap: 40px;
                        margin-top: 60px;
        }

                        .skill-category {
                            background: rgba(255, 255, 255, 0.03);
                        border-radius: 25px;
                        padding: 40px 30px;
                        border: 1px solid rgba(100, 255, 218, 0.1);
                        transition: all 0.3s ease;
        }

                        .skill-category:hover {
                            transform: translateY(-10px);
                        box-shadow: 0 25px 50px rgba(100, 255, 218, 0.1);
                        border-color: rgba(100, 255, 218, 0.3);
        }

                        .category-title {
                            font - size: 1.5rem;
                        font-weight: 700;
                        color: #64ffda;
                        margin-bottom: 30px;
                        text-align: center;
        }

                        .skills-grid {
                            display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                        gap: 20px;
        }

                        .skill-item {
                            padding: 20px 15px;
                        background: rgba(255, 255, 255, 0.05);
                        border-radius: 15px;
                        transition: all 0.3s ease;
                        cursor: pointer;
                        border: 1px solid transparent;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
        }

                        .skill-item:hover {
                            transform: translateY(-5px) scale(1.05);
                        background: rgba(100, 255, 218, 0.1);
                        border-color: #64ffda;
                        box-shadow: 0 15px 30px rgba(100, 255, 218, 0.2);
        }

                        .skill-icon {
                            width: 40px;
                        height: 40px;
                        margin-bottom: 10px;
                        object-fit: contain;
                        filter: brightness(0.9);
                        transition: filter 0.3s ease;
        }

                        .skill-item:hover .skill-icon {
                            filter: brightness(1.2);
        }

                        .skill-name {
                            font - weight: 600;
                        color: #ffffff;
                        font-size: 0.9rem;
        }

                        /* Projects Section */
                        .projects {
                            padding: 100px 20px;
        }

                        .projects-container {
                            max - width: 1400px;
                        margin: 0 auto;
        }

                        .projects-grid {
                            display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                        gap: 40px;
                        margin-top: 60px;
        }

                        .project-card {
                            background: rgba(255, 255, 255, 0.05);
                        border-radius: 20px;
                        padding: 40px;
                        transition: all 0.3s ease;
                        border: 1px solid rgba(100, 255, 218, 0.2);
                        position: relative;
                        overflow: hidden;
        }

                        .project-card::before {
                            content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 2px;
                        background: linear-gradient(90deg, #64ffda, #00bcd4);
                        transition: left 0.6s ease;
        }

                        .project-card:hover::before {
                            left: 100%;
        }

                        .project-card:hover {
                            transform: translateY(-10px);
                        box-shadow: 0 30px 60px rgba(100, 255, 218, 0.1);
                        background: rgba(255, 255, 255, 0.08);
        }

                        .project-title {
                            font - size: 1.5rem;
                        font-weight: 700;
                        color: #64ffda;
                        margin-bottom: 15px;
        }

                        .project-description {
                            color: #b0b0b0;
                        line-height: 1.6;
                        margin-bottom: 20px;
        }

                        .project-tech {
                            display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                        margin-bottom: 20px;
        }

                        .tech-tag {
                            padding: 5px 15px;
                        background: rgba(100, 255, 218, 0.1);
                        color: #64ffda;
                        border-radius: 20px;
                        font-size: 0.9rem;
                        border: 1px solid rgba(100, 255, 218, 0.3);
        }

                        .project-link {
                            color: #64ffda;
                        text-decoration: none;
                        font-weight: 600;
                        transition: color 0.3s ease;
        }

                        .project-link:hover {
                            color: #ffffff;
        }

                        /* Experience Timeline */
                        .experience {
                            padding: 100px 20px;
                        background: rgba(255, 255, 255, 0.02);
        }

                        .timeline {
                            max - width: 1000px;
                        margin: 60px auto 0;
                        position: relative;
        }

                        .timeline::before {
                            content: '';
                        position: absolute;
                        top: 0;
                        left: 50%;
                        width: 2px;
                        height: 100%;
                        background: linear-gradient(to bottom, #64ffda, #00bcd4);
                        transform: translateX(-50%);
        }

                        .timeline-item {
                            margin - bottom: 60px;
                        position: relative;
        }

                        .timeline-content {
                            width: 45%;
                        padding: 30px;
                        background: rgba(255, 255, 255, 0.05);
                        border-radius: 20px;
                        border: 1px solid rgba(100, 255, 218, 0.2);
                        transition: all 0.3s ease;
        }

                        .timeline-content:hover {
                            transform: translateY(-5px);
                        box-shadow: 0 20px 40px rgba(100, 255, 218, 0.1);
        }

                        .timeline-item:nth-child(odd) .timeline-content {
                            margin - left: 0;
        }

                        .timeline-item:nth-child(even) .timeline-content {
                            margin - left: 55%;
        }

                        .timeline-date {
                            color: #64ffda;
                        font-weight: 600;
                        margin-bottom: 10px;
        }

                        .timeline-title {
                            font - size: 1.3rem;
                        font-weight: 700;
                        color: #ffffff;
                        margin-bottom: 10px;
        }

                        .timeline-company {
                            color: #b0b0b0;
                        margin-bottom: 15px;
        }

                        .timeline-description {
                            color: #888;
                        line-height: 1.6;
        }

                        /* Contact Section */
                        .contact {
                            padding: 100px 20px;
                        text-align: center;
        }

                        .contact-container {
                            max - width: 800px;
                        margin: 0 auto;
        }

                        .contact-links {
                            display: flex;
                        justify-content: center;
                        gap: 40px;
                        margin-top: 60px;
                        flex-wrap: wrap;
        }

                        .contact-link {
                            padding: 20px 30px;
                        background: rgba(255, 255, 255, 0.05);
                        border-radius: 15px;
                        color: #ffffff;
                        text-decoration: none;
                        transition: all 0.3s ease;
                        border: 1px solid rgba(100, 255, 218, 0.2);
                        display: flex;
                        align-items: center;
                        gap: 15px;
        }

                        .contact-link:hover {
                            background: rgba(100, 255, 218, 0.1);
                        transform: translateY(-5px);
                        box-shadow: 0 15px 30px rgba(100, 255, 218, 0.2);
        }

                        .contact-icon {
                            font - size: 1.5rem;
        }

                        /* Mobile Menu */
                        .mobile-menu-toggle {
                            display: none;
                        flex-direction: column;
                        cursor: pointer;
        }

                        .mobile-menu-toggle span {
                            width: 25px;
                        height: 3px;
                        background: #ffffff;
                        margin: 3px 0;
                        transition: 0.3s;
        }

                        /* Responsive Design */
                        @media (max-width: 768px) {
                            nav {
                            padding: 15px 20px;
            }

                        .nav-links {
                            display: none;
            }

                        .mobile-menu-toggle {
                            display: flex;
            }

                        .hero-content {
                            padding: 0 15px;
            }

                        .projects-grid {
                            grid - template - columns: 1fr;
            }

                        .project-card {
                            padding: 25px;
            }

                        .timeline::before {
                            left: 20px;
            }

                        .timeline-content {
                            width: calc(100% - 60px);
                        margin-left: 60px !important;
            }

                        .contact-links {
                            flex - direction: column;
                        align-items: center;
            }

                        .stats-container {
                            grid - template - columns: repeat(2, 1fr);
                        gap: 20px;
            }

                        .skills-categories {
                            grid - template - columns: 1fr;
                        gap: 30px;
            }

                        .skills-grid {
                            grid - template - columns: repeat(2, 1fr);
                        gap: 15px;
            }
        }

                        @media (max-width: 480px) {
            .stats - container {
                            grid - template - columns: 1fr;
            }

                        .skills-grid {
                            grid - template - columns: repeat(2, 1fr);
            }

                        .skill-item {
                            padding: 20px 15px;
            }
        }
                    </style>
                </head>
                <body>
                    <!-- Animated Background -->
                    <div class="bg-animation"></div>

                    <!-- Particles -->
                    <div class="particles" id="particles"></div>

                    <!-- Navigation -->
                    <nav id="navbar">
                        <div class="nav-container">
                            <a href="#" class="logo">J.ERINOLA</a>
                            <ul class="nav-links">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                            <div class="mobile-menu-toggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </nav>

                    <!-- Hero Section -->
                    <section class="hero" id="home">
                        <div class="hero-content">
                            <h1>JEREMIAH ERINOLA</h1>
                            <p class="subtitle">Senior Fullstack Mobile Engineer</p>
                            <p class="description">5+ years crafting scalable Flutter & Node.js applications that connect millions of users worldwide</p>
                            <a href="#contact" class="cta-button">Let's Build Something Amazing</a>
                        </div>
                    </section>

                    <!-- Stats Section -->
                    <section class="stats" id="about">
                        <div class="stats-container">
                            <div class="stat-item">
                                <div class="stat-number">150K+</div>
                                <div class="stat-label">App Downloads</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">4.8★</div>
                                <div class="stat-label">Average Rating</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">35%</div>
                                <div class="stat-label">Crash Rate Reduction</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">5+</div>
                                <div class="stat-label">Years Experience</div>
                            </div>
                        </div>
                    </section>

                    <!-- Skills Section -->
                    <section class="skills" id="skills">
                        <div class="skills-container">
                            <h2 class="section-title">Technical Arsenal</h2>
                            <p style="font-size: 1.2rem; color: #b0b0b0; margin-bottom: 20px;">Also known as <strong style="color: #64ffda;">EL-Joy</strong> in the Slack-verse</p>

                            <div class="skills-categories">
                                <!-- Languages -->
                                <div class="skill-category">
                                    <h3 class="category-title">Languages</h3>
                                    <div class="skills-grid">
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" class="skill-icon">
                                                <div class="skill-name">Dart</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" class="skill-icon">
                                                <div class="skill-name">TypeScript</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="skill-icon">
                                                <div class="skill-name">JavaScript</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" alt="Swift" class="skill-icon">
                                                <div class="skill-name">Swift</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" class="skill-icon">
                                                <div class="skill-name">Kotlin</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Frameworks -->
                                <div class="skill-category">
                                    <h3 class="category-title">Frameworks</h3>
                                    <div class="skills-grid">
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" class="skill-icon">
                                                <div class="skill-name">Flutter</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" class="skill-icon">
                                                <div class="skill-name">Node.js</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" class="skill-icon">
                                                <div class="skill-name">Express</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://hono.dev/images/hono-logo.png" alt="Hono" class="skill-icon">
                                                <div class="skill-name">Hono</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" alt="NestJS" class="skill-icon">
                                                <div class="skill-name">NestJS</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- State Management -->
                                <div class="skill-category">
                                    <h3 class="category-title">State Management</h3>
                                    <div class="skills-grid">
                                        <div class="skill-item">
                                            <img src="https://riverpod.dev/img/logo.png" alt="Riverpod" class="skill-icon">
                                                <div class="skill-name">Riverpod</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://bloclibrary.dev/assets/bloc_logo_full.png" alt="BLoC" class="skill-icon">
                                                <div class="skill-name">BLoC</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://pub.dev/static/img/pub-dev-logo-2x.png" alt="Provider" class="skill-icon">
                                                <div class="skill-name">Provider</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://docs.flutter.dev/assets/images/dash/Dash.png" alt="GetX" class="skill-icon">
                                                <div class="skill-name">GetX</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Cloud & Backend -->
                                <div class="skill-category">
                                    <h3 class="category-title">Cloud & Backend</h3>
                                    <div class="skills-grid">
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" class="skill-icon">
                                                <div class="skill-name">AWS</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" class="skill-icon">
                                                <div class="skill-name">Firebase</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg" alt="Cloudflare" class="skill-icon">
                                                <div class="skill-name">Cloudflare</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://supabase.com/brand-assets/supabase-logo-icon.png" alt="Supabase" class="skill-icon">
                                                <div class="skill-name">Supabase</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" class="skill-icon">
                                                <div class="skill-name">GraphQL</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- APIs & Integration -->
                                <div class="skill-category">
                                    <h3 class="category-title">APIs & Integration</h3>
                                    <div class="skills-grid">
                                        <div class="skill-item">
                                            <img src="https://developers.google.com/maps/images/maps-icon.svg" alt="Google Maps" class="skill-icon">
                                                <div class="skill-name">Google Maps</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://docs.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png" alt="Mapbox" class="skill-icon">
                                                <div class="skill-name">Mapbox</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://stripe.com/img/v3/home/twitter.png" alt="Stripe" class="skill-icon">
                                                <div class="skill-name">Stripe</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/WebSocket_connection.png" alt="WebSockets" class="skill-icon">
                                                <div class="skill-name">WebSockets</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" alt="Socket.IO" class="skill-icon">
                                                <div class="skill-name">Socket.IO</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- DevOps & Tools -->
                                <div class="skill-category">
                                    <h3 class="category-title">DevOps & Tools</h3>
                                    <div class="skills-grid">
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" class="skill-icon">
                                                <div class="skill-name">Git</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Actions" class="skill-icon">
                                                <div class="skill-name">GitHub Actions</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" class="skill-icon">
                                                <div class="skill-name">Docker</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" class="skill-icon">
                                                <div class="skill-name">Jira</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" class="skill-icon">
                                                <div class="skill-name">Slack</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Mobile & Testing -->
                                <div class="skill-category">
                                    <h3 class="category-title">Mobile & Testing</h3>
                                    <div class="skills-grid">
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" class="skill-icon">
                                                <div class="skill-name">Android</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="iOS" class="skill-icon">
                                                <div class="skill-name">iOS</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://docs.flutter.dev/assets/images/dash/Dash.png" alt="Flutter Test" class="skill-icon">
                                                <div class="skill-name">Flutter Test</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://avatars.githubusercontent.com/u/8908513?s=200&v=4" alt="BLE" class="skill-icon">
                                                <div class="skill-name">BLE</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://codemagic.io/images/codemagic-logo.png" alt="Codemagic" class="skill-icon">
                                                <div class="skill-name">Codemagic</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Chat & Communication -->
                                <div class="skill-category">
                                    <h3 class="category-title">Chat & Communication</h3>
                                    <div class="skills-grid">
                                        <div class="skill-item">
                                            <img src="https://docs.sendbird.com/img/icon_sendbird_512.png" alt="SendBird" class="skill-icon">
                                                <div class="skill-name">SendBird</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://stream-blog.s3.amazonaws.com/blog/wp-content/uploads/fc107544c8d3d4dd4a5f4de7bb8f7b84/Stream_logomark_blue.png" alt="Stream Chat" class="skill-icon">
                                                <div class="skill-name">Stream Chat</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://firebase.google.com/images/social.png" alt="FCM" class="skill-icon">
                                                <div class="skill-name">FCM</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack Bot" class="skill-icon">
                                                <div class="skill-name">Slack Bot</div>
                                        </div>
                                        <div class="skill-item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="WhatsApp API" class="skill-icon">
                                                <div class="skill-name">WhatsApp API</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Projects Section -->
                    <section class="projects" id="projects">
                        <div class="projects-container">
                            <h2 class="section-title">Featured Projects</h2>
                            <div class="projects-grid">
                                <div class="project-card">
                                    <h3 class="project-title">Wardrobe Buddy AI</h3>
                                    <p class="project-description">AI-powered outfit recommendation platform using Gemini 2.0 Flash. Suggests daily outfit combinations based on weather and existing wardrobe, built as PWA for cross-platform compatibility.</p>
                                    <div class="project-tech">
                                        <span class="tech-tag">Flutter</span>
                                        <span class="tech-tag">Node.js</span>
                                        <span class="tech-tag">Gemini AI</span>
                                        <span class="tech-tag">Cloudflare</span>
                                        <span class="tech-tag">Supabase</span>
                                    </div>
                                    <a href="https://github.com/jeremiahseun" class="project-link">View on GitHub →</a>
                                </div>

                                <div class="project-card">
                                    <h3 class="project-title">GreenVoice</h3>
                                    <p class="project-description">Award-winning civic engagement platform for reporting issues and voting on community projects. Winner of FlutterBytes Hackathon 2024 with real-time voting and geolocation features.</p>
                                    <div class="project-tech">
                                        <span class="tech-tag">Flutter</span>
                                        <span class="tech-tag">Firebase</span>
                                        <span class="tech-tag">Google Maps</span>
                                        <span class="tech-tag">Real-time DB</span>
                                    </div>
                                    <a href="https://github.com/jeremiahseun" class="project-link">View Project →</a>
                                </div>

                                <div class="project-card">
                                    <h3 class="project-title">Stripe Identity Plugin</h3>
                                    <p class="project-description">Flutter/Dart KYC package for seamless identity verification through document uploads. Supports both Android and iOS with robust security features.</p>
                                    <div class="project-tech">
                                        <span class="tech-tag">Flutter</span>
                                        <span class="tech-tag">Dart</span>
                                        <span class="tech-tag">Stripe API</span>
                                        <span class="tech-tag">Native SDK</span>
                                    </div>
                                    <a href="https://github.com/jeremiahseun" class="project-link">View Package →</a>
                                </div>

                                <div class="project-card">
                                    <h3 class="project-title">Swiftly Rescue Platform</h3>
                                    <p class="project-description">Automobile support platform serving 10K+ users with location-based services. Optimized performance by 30% and integrated Google Maps for enhanced navigation.</p>
                                    <div class="project-tech">
                                        <span class="tech-tag">Flutter</span>
                                        <span class="tech-tag">Google Maps</span>
                                        <span class="tech-tag">REST API</span>
                                        <span class="tech-tag">Location Services</span>
                                    </div>
                                    <a href="https://github.com/jeremiahseun" class="project-link">Case Study →</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Experience Timeline -->
                    <section class="experience" id="experience">
                        <div class="skills-container">
                            <h2 class="section-title">Professional Journey</h2>
                            <div class="timeline">
                                <div class="timeline-item">
                                    <div class="timeline-content">
                                        <div class="timeline-date">Dec 2024 - Present</div>
                                        <div class="timeline-title">Android Engineer (Flutter)</div>
                                        <div class="timeline-company">Anywhere Healing Ltd</div>
                                        <div class="timeline-description">Leading Android development for bio-resonance health platform. Achieved 15% faster data sync with BLE optimization and 20% increase in daily active users.</div>
                                    </div>
                                </div>

                                <div class="timeline-item">
                                    <div class="timeline-content">
                                        <div class="timeline-date">Nov 2023 - Oct 2024</div>
                                        <div class="timeline-title">Mobile Developer</div>
                                        <div class="timeline-company">Swiftly Rescue Ltd</div>
                                        <div class="timeline-description">Built automobile support platform from scratch, serving 10K+ users. Reduced response time by 30% and increased user satisfaction by 25%.</div>
                                    </div>
                                </div>

                                <div class="timeline-item">
                                    <div class="timeline-content">
                                        <div class="timeline-date">May 2024 - Nov 2024</div>
                                        <div class="timeline-title">Flutter Engineer</div>
                                        <div class="timeline-company">Shearify Ltd</div>
                                        <div class="timeline-description">Developed global stylist connection app, increasing bookings by 40%. Delivered 99.9% crash-free sessions using AWS Amplify and GraphQL.</div>
                                    </div>
                                </div>

                                <div class="timeline-item">
                                    <div class="timeline-content">
                                        <div class="timeline-date">June 2022 - Oct 2023</div>
                                        <div class="timeline-title">Lead Flutter Developer</div>
                                        <div class="timeline-company">Impresanera Ltd</div>
                                        <div class="timeline-description">Led ride-hailing platform development achieving 60% adoption in 6 months. Implemented WebSockets for real-time communication.</div>
                                    </div>
                                </div>

                                <div class="timeline-item">
                                    <div class="timeline-content">
                                        <div class="timeline-date">Oct 2021 - June 2022</div>
                                        <div class="timeline-title">Mobile Developer</div>
                                        <div class="timeline-company">Hotels.ng</div>
                                        <div class="timeline-description">Created iOS app capturing 30% more mobile users. Improved Android performance by 25% and user retention by 20%.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Contact Section -->
                    <section class="contact" id="contact">
                        <div class="contact-container">
                            <h2 class="section-title">Let's Connect</h2>
                            <p style="font-size: 1.2rem; color: #b0b0b0; margin-bottom: 20px;">Ready to build the next game-changing mobile application?</p>
                            <div class="contact-links">
                                <a href="mailto:seunjeremiah@gmail.com" class="contact-link">
                                    <span class="contact-icon">📧</span>
                                    <span>seunjeremiah@gmail.com</span>
                                </a>
                                <a href="https://www.linkedin.com/in/jeremiah-seun-eljoy" class="contact-link" target="_blank">
                                    <span class="contact-icon">💼</span>
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://github.com/jeremiahseun" class="contact-link" target="_blank">
                                    <span class="contact-icon">🚀</span>
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </section>

                    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                            anchor.addEventListener('click', function (e) {
                                e.preventDefault();
                                const target = document.querySelector(this.getAttribute('href'));
                                if (target) {
                                    target.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }
                            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                            navbar.classList.add('scrolled');
            } else {
                            navbar.classList.remove('scrolled');
            }
        });

                        // Create floating particles
                        function createParticles() {
            const particlesContainer = document.getElementById('particles');

                        for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                        particle.className = 'particle';
                        particle.style.left = Math.random() * 100 + '%';
                        particle.style.animationDelay = Math.random() * 20 + 's';
                        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                        particlesContainer.appendChild(particle);
            }
        }

                        // Intersection Observer for animations
                        const observerOptions = {
                            threshold: 0.1,
                        rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    entry.target.style.opacity = '1';
                                    entry.target.style.transform = 'translateY(0)';
                                }
                            });
        }, observerOptions);

        // Observe elements for animation
        document.addEventListener('DOMContentLoaded', () => {
                            createParticles();

                        // Add animation classes to elements
                        const animateElements = document.querySelectorAll(
                        '.stat-item, .skill-item, .project-card, .timeline-item, .contact-link'
                        );

            animateElements.forEach(el => {
                            el.style.opacity = '0';
                        el.style.transform = 'translateY(30px)';
                        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        observer.observe(el);
            });
        });

                        // Counter animation for stats
                        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
                        const speed = 200;

            counters.forEach(counter => {
                const updateCount = () => {
                    const target = counter.textContent;
                        const count = +counter.getAttribute('data-count') || 0;

                        // Extract number from text
                        const targetNum = parseInt(target.replace(/[^\d]/g, ''));
                        const inc = targetNum / speed;

                        if (count < targetNum) {
                            counter.setAttribute('data-count', Math.ceil(count + inc));
                        const suffix = target.replace(/[\d]/g, '');
                        counter.textContent = Math.ceil(count + inc) + suffix;
                        setTimeout(updateCount, 1);
                    } else {
                            counter.textContent = target;
                    }
                };

                // Start animation when element is visible
                const statsObserver = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    updateCount();
                                    statsObserver.unobserve(entry.target);
                                }
                            });
                });

                        statsObserver.observe(counter.closest('.stat-item'));
            });
        }

                        // Mobile menu functionality
                        const mobileToggle = document.querySelector('.mobile-menu-toggle');
                        const navLinks = document.querySelector('.nav-links');

        mobileToggle.addEventListener('click', () => {
                            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                        mobileToggle.classList.toggle('active');
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
                        const hero = document.querySelector('.hero');
                        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        });

        // Initialize animations
        document.addEventListener('DOMContentLoaded', () => {
                            animateCounters();

                        // Add typing effect to hero title
                        const heroTitle = document.querySelector('.hero h1');
                        const text = heroTitle.textContent;
                        heroTitle.textContent = '';

                        let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                            heroTitle.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                }
            };

                        setTimeout(typeWriter, 1000);
        });

                        // Add hover sound effect (optional)
                        const buttons = document.querySelectorAll('.cta-button, .contact-link, .project-link');
        buttons.forEach(button => {
                            button.addEventListener('mouseenter', () => {
                                // You can add subtle audio feedback here if desired
                                button.style.transform += ' scale(1.02)';
                            });

            button.addEventListener('mouseleave', () => {
                            button.style.transform = button.style.transform.replace(' scale(1.02)', '');
            });
        });

                        // Easter egg: Konami code
                        let konamiCode = [];
                        const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

        document.addEventListener('keydown', (e) => {
                            konamiCode.push(e.keyCode);
                        konamiCode = konamiCode.slice(-10);

                        if (konamiCode.join(',') === konami.join(',')) {
                            document.body.style.filter = 'hue-rotate(180deg)';
                setTimeout(() => {
                            document.body.style.filter = '';
                }, 3000);
            }
        });
                    </script>
                </body>
            </html>
