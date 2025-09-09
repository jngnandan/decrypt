'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  TextInput,
  Select,
  Checkbox,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Skeleton,
  Stack,
  Divider,
  rem,
  NumberInput,
  Textarea,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { 
  IconUser, 
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconCalendar,
  IconFlag,
  IconLanguage,
  IconBuilding
} from '@tabler/icons-react';
import classes from './AuthenticationTitle.module.css';

export default function CitizenshipApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [initialLoading, setInitialLoading] = useState(true);
  const router = useRouter();

  // Form state
  const [formData, setFormData] = useState({
    // Personal Information
    legalGivenNames: '',
    legalSurname: '',
    sex: '',
    dateOfBirth: { day: '', month: '', year: '' },
    citizenship: '',
    countryOfBirth: '',
    preferredLanguage: '',
    priorNames: '',
    
    // Professional Information
    shareProfessionInfo: false,
    
    // Residential Address
    country: '',
    streetAddress: '',
    city: '',
    administrativeSubdivision: '',
    postalCode: '',
    phoneNumber: '',
    contactViaSMS: false,
    
    // Mailing Address
    sameAsResidential: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Citizenship application submitted:', formData);
      // Here you would typically send the data to your backend
      setError('Application submitted successfully! (Demo mode)');
      // router.push('/dashboard');
    } catch (err) {
      console.error('Error during application submission:', err);
      setError('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDateChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      dateOfBirth: {
        ...prev.dateOfBirth,
        [field]: value
      }
    }));
  };

  const pageTitle = "Citizenship Application | Decrypt";
  const pageDescription = "Apply for citizenship with our secure application process.";

  const iconStyle = { width: rem(18), height: rem(18) };
  const userIcon = <IconUser style={iconStyle} />;
  const mailIcon = <IconMail style={iconStyle} />;
  const phoneIcon = <IconPhone style={iconStyle} />;
  const mapIcon = <IconMapPin style={iconStyle} />;
  const calendarIcon = <IconCalendar style={iconStyle} />;
  const flagIcon = <IconFlag style={iconStyle} />;
  const languageIcon = <IconLanguage style={iconStyle} />;
  const buildingIcon = <IconBuilding style={iconStyle} />;

  const monthOptions = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  const dayOptions = Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1).padStart(2, '0'),
    label: String(i + 1)
  }));

  const yearOptions = Array.from({ length: 100 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return { value: String(year), label: String(year) };
  });

  const sexOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' },
  ];

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'it', label: 'Italy' },
    { value: 'es', label: 'Spain' },
    { value: 'nl', label: 'Netherlands' },
    { value: 'se', label: 'Sweden' },
    { value: 'no', label: 'Norway' },
    { value: 'dk', label: 'Denmark' },
    { value: 'fi', label: 'Finland' },
    { value: 'ch', label: 'Switzerland' },
    { value: 'at', label: 'Austria' },
    { value: 'be', label: 'Belgium' },
    { value: 'ie', label: 'Ireland' },
    { value: 'nz', label: 'New Zealand' },
    { value: 'jp', label: 'Japan' },
    { value: 'kr', label: 'South Korea' },
    { value: 'sg', label: 'Singapore' },
    { value: 'hk', label: 'Hong Kong' },
    { value: 'other', label: 'Other' },
  ];

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'it', label: 'Italian' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'ru', label: 'Russian' },
    { value: 'zh', label: 'Chinese' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korean' },
    { value: 'ar', label: 'Arabic' },
    { value: 'hi', label: 'Hindi' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <Container size={600} my={60}>
        <header>
          <Title ta="center" className={classes.title}>
            Citizenship Application
          </Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Step 1: Personal Information
          </Text>
          <Text c="dimmed" size="sm" ta="center" mt={10}>
            To get started with your application, we will need some basic info. The data you enter is autosaved, so you can always continue where you left off. By entering your data, you are agreeing to our privacy policy.
          </Text>
        </header>

        <main>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            {initialLoading ? (
              <>
                <Skeleton height={36} radius="xl" mb="md" />
                <Skeleton height={36} radius="xl" mb="md" />
                <Skeleton height={36} radius="xl" mb="md" />
                <Skeleton height={50} width="100%" mb="md" />
                <Skeleton height={50} width="100%" mb="md" />
                <Skeleton height={50} width="100%" mb="md" />
              </>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Personal Information Section */}
                <Stack gap="md" mb="xl">
                  <Title order={3} size="h4" mb="md">Personal Information</Title>
                  
                  <Group grow>
                    <TextInput
                      label="Legal given name(s)"
                      placeholder="John Richard"
                      required
                      leftSection={userIcon}
                      leftSectionPointerEvents="none"
                      value={formData.legalGivenNames}
                      onChange={(e) => handleInputChange('legalGivenNames', e.target.value)}
                    />
                    <TextInput
                      label="Legal surname"
                      placeholder="Doe"
                      required
                      leftSection={userIcon}
                      leftSectionPointerEvents="none"
                      value={formData.legalSurname}
                      onChange={(e) => handleInputChange('legalSurname', e.target.value)}
                    />
                  </Group>

                  <Group grow>
                    <Select
                      label="Sex"
                      placeholder="Select sex"
                      required
                      leftSection={userIcon}
                      leftSectionPointerEvents="none"
                      data={sexOptions}
                      value={formData.sex}
                      onChange={(value) => handleInputChange('sex', value)}
                    />
                    <TextInput
                      label="Prior or other names"
                      placeholder="Michael Joseph Smith"
                      leftSection={userIcon}
                      leftSectionPointerEvents="none"
                      value={formData.priorNames}
                      onChange={(e) => handleInputChange('priorNames', e.target.value)}
                    />
                  </Group>

                  <Group grow>
                    <Select
                      label="Date of birth - Day"
                      placeholder="Day"
                      required
                      leftSection={calendarIcon}
                      leftSectionPointerEvents="none"
                      data={dayOptions}
                      value={formData.dateOfBirth.day}
                      onChange={(value) => handleDateChange('day', value)}
                    />
                    <Select
                      label="Date of birth - Month"
                      placeholder="Month"
                      required
                      leftSection={calendarIcon}
                      leftSectionPointerEvents="none"
                      data={monthOptions}
                      value={formData.dateOfBirth.month}
                      onChange={(value) => handleDateChange('month', value)}
                    />
                    <Select
                      label="Date of birth - Year"
                      placeholder="Year"
                      required
                      leftSection={calendarIcon}
                      leftSectionPointerEvents="none"
                      data={yearOptions}
                      value={formData.dateOfBirth.year}
                      onChange={(value) => handleDateChange('year', value)}
                    />
                  </Group>

                  <Group grow>
                    <Select
                      label="Citizenship"
                      placeholder="Current citizenship"
                      required
                      leftSection={flagIcon}
                      leftSectionPointerEvents="none"
                      data={countryOptions}
                      value={formData.citizenship}
                      onChange={(value) => handleInputChange('citizenship', value)}
                    />
                    <Select
                      label="Country of birth"
                      placeholder="Country of birth"
                      required
                      leftSection={flagIcon}
                      leftSectionPointerEvents="none"
                      data={countryOptions}
                      value={formData.countryOfBirth}
                      onChange={(value) => handleInputChange('countryOfBirth', value)}
                    />
                  </Group>

                  <Select
                    label="Preferred language"
                    placeholder="Preferred language"
                    required
                    leftSection={languageIcon}
                    leftSectionPointerEvents="none"
                    data={languageOptions}
                    value={formData.preferredLanguage}
                    onChange={(value) => handleInputChange('preferredLanguage', value)}
                  />
                </Stack>

                <Divider my="xl" />

                {/* Professional Information Section */}
                <Stack gap="md" mb="xl">
                  <Title order={3} size="h4" mb="md">Professional Information</Title>
                  
                  <Checkbox
                    label="I want to share information about my profession & income"
                    checked={formData.shareProfessionInfo}
                    onChange={(e) => handleInputChange('shareProfessionInfo', e.currentTarget.checked)}
                  />
                </Stack>

                <Divider my="xl" />

                {/* Residential Address Section */}
                <Stack gap="md" mb="xl">
                  <Title order={3} size="h4" mb="md">Residential Address</Title>
                  
                  <Select
                    label="Country"
                    placeholder="Select country"
                    required
                    leftSection={flagIcon}
                    leftSectionPointerEvents="none"
                    data={countryOptions}
                    value={formData.country}
                    onChange={(value) => handleInputChange('country', value)}
                  />

                  <TextInput
                    label="Street address"
                    placeholder="123 Main Street"
                    required
                    leftSection={mapIcon}
                    leftSectionPointerEvents="none"
                    value={formData.streetAddress}
                    onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                  />

                  <Group grow>
                    <TextInput
                      label="City"
                      placeholder="New York"
                      required
                      leftSection={mapIcon}
                      leftSectionPointerEvents="none"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                    />
                    <TextInput
                      label="Administrative subdivision"
                      placeholder="State/Province"
                      leftSection={mapIcon}
                      leftSectionPointerEvents="none"
                      value={formData.administrativeSubdivision}
                      onChange={(e) => handleInputChange('administrativeSubdivision', e.target.value)}
                    />
                  </Group>

                  <Group grow>
                    <TextInput
                      label="Postal code"
                      placeholder="10001"
                      required
                      leftSection={mapIcon}
                      leftSectionPointerEvents="none"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    />
                    <TextInput
                      label="Phone number"
                      placeholder="+1 (555) 123-4567"
                      required
                      leftSection={phoneIcon}
                      leftSectionPointerEvents="none"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    />
                  </Group>

                  <Checkbox
                    label="I would like to be contacted via SMS at my phone number"
                    checked={formData.contactViaSMS}
                    onChange={(e) => handleInputChange('contactViaSMS', e.currentTarget.checked)}
                  />
                </Stack>

                <Divider my="xl" />

                {/* Mailing Address Section */}
                <Stack gap="md" mb="xl">
                  <Title order={3} size="h4" mb="md">Mailing Address</Title>
                  
                  <Checkbox
                    label="Same as my residential address"
                    checked={formData.sameAsResidential}
                    onChange={(e) => handleInputChange('sameAsResidential', e.currentTarget.checked)}
                  />
                </Stack>

                {error && <Text color="red" size="sm" ta="center" role="alert" mb="md">{error}</Text>}

                <Text size="xs" c="dimmed" mb="md">
                  *indicates a required field
                </Text>

                <Button type="submit" fullWidth mt="xl" loading={loading} radius="xs" size="lg">
                  Continue to step 2
                </Button>
              </form>
            )}
          </Paper>
        </main>
      </Container>
    </>
  );
}
