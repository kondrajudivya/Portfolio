/**
 * Divya Kondraju Portfolio - Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Project Database for Dynamic Modal Preview
  const projectsData = {
    'reel-1': {
      title: 'High-Retention Viral Product Reel',
      category: 'Video Editing & Reels',
      badge: 'Video Editing',
      image: 'assets/images/projects/project-reel1.svg',
      desc: 'Produced an ultra-dynamic 30-second commercial reel engineered for high engagement and watch time. Utilized fast cuts, custom beat-matched audio transitions, animated captions, and zoom punches to maintain viewer focus through the critical first 3 seconds.',
      tools: ['Adobe Premiere Pro', 'CapCut Pro', 'Sound Design FX', 'Trending Audio'],
      deliverables: ['9:16 Vertical Cut', 'Animated Subtitles', 'Color-graded Master', 'Sound Mix'],
      metrics: '84.6% Avg Watch Duration • 120k+ Views'
    },
    'reel-2': {
      title: 'Cinematic Lifestyle & Brand Narrative',
      category: 'Video Editing & Reels',
      badge: 'Video Editing',
      image: 'assets/images/projects/project-reel2.svg',
      desc: 'Executed end-to-end post-production including professional color grading from flat log profiles to rich, warm, filmic tones. Integrated atmospheric sound design and seamless split-screen storytelling.',
      tools: ['Premiere Pro', 'DaVinci Resolve Look', 'CapCut Desktop', 'Luts Master'],
      deliverables: ['4K Master Export', 'Cinematic Soundscape', 'Color LUT Profile', 'Reels Cut'],
      metrics: '4K 60FPS Delivery • Film Tone Consistency'
    },
    'ai-1': {
      title: 'AI Brand Spokesperson & Localization',
      category: 'AI Video Creation',
      badge: 'AI Creations',
      image: 'assets/images/projects/project-ai1.svg',
      videoUrl: 'assets/videos/ai-video.mp4',
      desc: 'Developed an automated pipeline using generative AI tools to create photorealistic AI avatars and natural multilingual voice synthesis. Engineered custom system prompts for realistic cadence and gestures.',
      tools: ['HeyGen / D-ID', 'ElevenLabs Voice AI', 'ChatGPT Scripting', 'CapCut Polishing'],
      deliverables: ['Full HD Avatar Video', 'Telugu & English Dual Tracks', 'B-Roll Integration'],
      metrics: '10x Faster Production • 80% Cost Reduction'
    },
    'saanvi-kitchen': {
      title: "Saanvi's Kitchen — Restaurant & WhatsApp Ordering Platform",
      category: 'Website Design',
      badge: 'Live Website',
      image: 'assets/images/projects/project-saanvi.svg',
      liveUrl: 'https://kondrajudivya.github.io/Saanvi-s-Kitchen/',
      desc: 'Designed and deployed an authentic South Indian restaurant web experience for Sanvi Kitchens in Madiwala, Bengaluru. Features responsive mobile-first dining menus, instant WhatsApp online ordering routing, specialty dishes showcase (Chicken & Mutton Dum Biryani, Crispy Dosa, Filter Coffee), and interactive Google Maps location integration.',
      tools: ['HTML5 & Modern CSS3', 'JavaScript', 'WhatsApp API Integration', 'Responsive UI/UX', 'GitHub Pages'],
      deliverables: ['Live Production Website', 'Direct WhatsApp Ordering', 'Menu & Specialities UI', 'Location & Contact Section'],
      metrics: '100% Live on GitHub Pages • Mobile Optimized • Direct Instant Ordering'
    },
    'web-1': {
      title: 'Luxe Studio - Creative Agency Landing Page',
      category: 'Website Design',
      badge: 'Website Design',
      image: 'assets/images/projects/project-web1.svg',
      desc: 'A modern, responsive landing page crafted with clean visual hierarchy, subtle glassmorphism, responsive flex/grid layouts, and mobile-first optimization. Designed to maximize client inquiries and brand authority.',
      tools: ['Figma UI/UX', 'HTML5 & CSS3', 'JavaScript', 'Responsive Architecture'],
      deliverables: ['Fully Responsive Codebase', 'Interactive Showcase', 'Contact System', 'SEO Setup'],
      metrics: '100% Mobile Optimized • <1.2s Load Time'
    },
    'web-2': {
      title: 'EcoBloom - Modern Organic Storefront',
      category: 'Website Design',
      badge: 'Website Design',
      image: 'assets/images/projects/project-web2.svg',
      desc: 'Clean, soothing e-commerce interface featuring warm natural tones, intuitive product browsing, interactive cart previews, and trust-building social proof components.',
      tools: ['UI Design', 'Modern CSS Grid', 'Vanilla JS Components', 'Clean Typography'],
      deliverables: ['Product Cards UI', 'Cart Interaction Flow', 'Mobile Checkout Layout'],
      metrics: 'High Contrast Accessibility • Clean Code'
    },
    'mkt-1': {
      title: '30-Day Social Media Growth & Viral Blueprint',
      category: 'Digital Marketing',
      badge: 'Digital Marketing',
      image: 'assets/images/projects/project-marketing1.svg',
      desc: 'Formulated and executed a 30-day multi-platform content roadmap focused on short-form reels, carousel infographics, community engagement tactics, and algorithmic timing.',
      tools: ['Meta Business Suite', 'Canva Graphics', 'Content Calendar', 'Hashtag Matrix'],
      deliverables: ['30-Day Content Plan', '15 Reel Scripts', 'Carousel Graphic Templates'],
      metrics: '1.2M+ Total Impressions • +18.4K Followers'
    },
    'mkt-2': {
      title: 'Sri Lakshmi Narasimha Swamy Tiffins — Grand Opening Campaign',
      category: 'Digital Marketing',
      badge: 'Client Campaign',
      image: 'assets/images/projects/marketing-tiffins.jpg',
      desc: 'Designed and executed the festive grand opening promotional campaign creative for Sri Lakshmi Narasimha Swamy Tiffins located at 18th Main, Maruthi Nagar, Bangalore. The campaign highlighted pure vegetarian South Indian breakfast specialties (Crispy Dosa, Steaming Idli, Vada, Bonda, Chapathi), integrated direct telephone booking CTAs (98866 77345), and drove strong launch footfall across local WhatsApp community groups.',
      tools: ['Canva Pro', 'Photoshop Food Retouching', 'Social Media Ad Design', 'Local Promotion Strategy'],
      deliverables: ['Grand Opening Master Poster', 'WhatsApp Broadcast Creatives', 'Instagram Promo Post', 'Local Ad Copy'],
      metrics: 'High Launch Footfall • 25+ Local Community Groups Shared'
    }
  };

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.innerHTML = isOpen ? '&times;' : '&#9776;';
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.innerHTML = '&#9776;';
      });
    });
  }

  // 3. Header Scroll Effect & Scroll Spy
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  // 4. Portfolio Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCat.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // 5. Project Preview Modal
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalImg = document.getElementById('modalImg');
  const modalVideo = document.getElementById('modalVideo');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDesc = document.getElementById('modalDesc');
  const modalTools = document.getElementById('modalTools');
  const modalMetrics = document.getElementById('modalMetrics');
  const modalLiveBtn = document.getElementById('modalLiveBtn');

  document.querySelectorAll('.btn-preview-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const data = projectsData[projectId];

      if (data && modal) {
        // Toggle Video vs Image
        if (data.videoUrl && modalVideo) {
          modalVideo.src = data.videoUrl;
          modalVideo.style.display = 'block';
          if (modalImg) modalImg.style.display = 'none';
        } else {
          if (modalVideo) {
            modalVideo.pause();
            modalVideo.src = '';
            modalVideo.style.display = 'none';
          }
          if (modalImg) {
            modalImg.src = data.image;
            modalImg.alt = data.title;
            modalImg.style.display = 'block';
          }
        }

        modalTitle.textContent = data.title;
        modalCategory.textContent = data.category;
        modalDesc.textContent = data.desc;
        modalMetrics.textContent = data.metrics;

        // Render tool badges
        modalTools.innerHTML = data.tools.map(tool => `<span class="p-tag">${tool}</span>`).join('');

        // Wire up live URL if present
        if (modalLiveBtn) {
          if (data.liveUrl) {
            modalLiveBtn.href = data.liveUrl;
            modalLiveBtn.style.display = 'inline-flex';
          } else {
            modalLiveBtn.style.display = 'none';
          }
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    if (modal) {
      if (modalVideo) {
        modalVideo.pause();
      }
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // 6. Animated Skill Bars on Scroll
  const skillFills = document.querySelectorAll('.skill-fill');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetWidth = entry.target.getAttribute('data-width');
          entry.target.style.width = targetWidth;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    skillFills.forEach(fill => observer.observe(fill));
  } else {
    skillFills.forEach(fill => {
      fill.style.width = fill.getAttribute('data-width');
    });
  }

  // 7. Toast Message Notification Helper
  function showToast(message) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>💬</span> <span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // 8. Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const email = document.getElementById('clientEmail').value.trim();
      const service = document.getElementById('clientService').value;
      const message = document.getElementById('clientMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.');
        return;
      }

      // Format WhatsApp pre-filled message
      const waText = encodeURIComponent(
        `Hi Divya, I saw your portfolio!\n\nName: ${name}\nEmail: ${email}\nInterested In: ${service}\nMessage: ${message}`
      );
      const waUrl = `https://wa.me/919398548838?text=${waText}`;

      showToast(`Thank you ${name}! Opening WhatsApp to connect with Divya...`);

      setTimeout(() => {
        window.open(waUrl, '_blank');
        contactForm.reset();
      }, 1000);
    });
  }
});
