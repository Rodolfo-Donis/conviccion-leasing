/**
 * Form validation utilities for the leasing company website
 */

/**
 * Validate required field
 * @param {string} value - Field value
 * @param {string} fieldName - Name of the field
 * @returns {object} Validation result
 */
export const validateRequired = (value, fieldName) => {
  if (!value || value.trim() === '') {
    return {
      isValid: false,
      message: `${fieldName} is required`
    };
  }
  return { isValid: true, message: '' };
};

/**
 * Validate email field
 * @param {string} email - Email to validate
 * @returns {object} Validation result
 */
export const validateEmail = (email) => {
  if (!email) {
    return {
      isValid: false,
      message: 'Email is required'
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: 'Please enter a valid email address'
    };
  }

  return { isValid: true, message: '' };
};

/**
 * Validate phone number
 * @param {string} phone - Phone to validate
 * @returns {object} Validation result
 */
export const validatePhone = (phone) => {
  if (!phone) {
    return { isValid: true, message: '' }; // Phone is optional
  }

  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  const cleanedPhone = phone.replace(/\D/g, '');
  
  if (cleanedPhone.length < 10) {
    return {
      isValid: false,
      message: 'Please enter a valid phone number'
    };
  }

  return { isValid: true, message: '' };
};

/**
 * Validate message length
 * @param {string} message - Message to validate
 * @param {number} minLength - Minimum length
 * @param {number} maxLength - Maximum length
 * @returns {object} Validation result
 */
export const validateMessage = (message, minLength = 10, maxLength = 1000) => {
  if (!message) {
    return {
      isValid: false,
      message: 'Message is required'
    };
  }

  if (message.length < minLength) {
    return {
      isValid: false,
      message: `Message must be at least ${minLength} characters long`
    };
  }

  if (message.length > maxLength) {
    return {
      isValid: false,
      message: `Message must be no more than ${maxLength} characters long`
    };
  }

  return { isValid: true, message: '' };
};

/**
 * Validate company name
 * @param {string} company - Company name to validate
 * @returns {object} Validation result
 */
export const validateCompany = (company) => {
  if (!company) {
    return { isValid: true, message: '' }; // Company is optional
  }

  if (company.length < 2) {
    return {
      isValid: false,
      message: 'Company name must be at least 2 characters long'
    };
  }

  if (company.length > 100) {
    return {
      isValid: false,
      message: 'Company name must be no more than 100 characters long'
    };
  }

  return { isValid: true, message: '' };
};

/**
 * Validate lease type selection
 * @param {string} leaseType - Selected lease type
 * @returns {object} Validation result
 */
export const validateLeaseType = (leaseType) => {
  const validTypes = ['equipment', 'vehicles', 'technology', 'office', 'other'];
  
  if (!leaseType) {
    return {
      isValid: false,
      message: 'Please select a lease type'
    };
  }

  if (!validTypes.includes(leaseType)) {
    return {
      isValid: false,
      message: 'Please select a valid lease type'
    };
  }

  return { isValid: true, message: '' };
};

/**
 * Validate entire contact form
 * @param {object} formData - Form data object
 * @returns {object} Validation result
 */
export const validateContactForm = (formData) => {
  const errors = {};
  let isValid = true;

  // Validate name
  const nameValidation = validateRequired(formData.name, 'Name');
  if (!nameValidation.isValid) {
    errors.name = nameValidation.message;
    isValid = false;
  }

  // Validate email
  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message;
    isValid = false;
  }

  // Validate company (optional)
  const companyValidation = validateCompany(formData.company);
  if (!companyValidation.isValid) {
    errors.company = companyValidation.message;
    isValid = false;
  }

  // Validate phone (optional)
  const phoneValidation = validatePhone(formData.phone);
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.message;
    isValid = false;
  }

  // Validate lease type
  const leaseTypeValidation = validateLeaseType(formData.leaseType);
  if (!leaseTypeValidation.isValid) {
    errors.leaseType = leaseTypeValidation.message;
    isValid = false;
  }

  // Validate message
  const messageValidation = validateMessage(formData.message);
  if (!messageValidation.isValid) {
    errors.message = messageValidation.message;
    isValid = false;
  }

  return {
    isValid,
    errors
  };
};

/**
 * Get field validation function by field name
 * @param {string} fieldName - Name of the field
 * @returns {Function} Validation function
 */
export const getFieldValidator = (fieldName) => {
  const validators = {
    name: (value) => validateRequired(value, 'Name'),
    email: validateEmail,
    company: validateCompany,
    phone: validatePhone,
    leaseType: validateLeaseType,
    message: validateMessage
  };

  return validators[fieldName] || (() => ({ isValid: true, message: '' }));
};

/**
 * Validate field in real-time
 * @param {string} fieldName - Name of the field
 * @param {string} value - Field value
 * @returns {object} Validation result
 */
export const validateField = (fieldName, value) => {
  const validator = getFieldValidator(fieldName);
  return validator(value);
};

/**
 * Check if form has any errors
 * @param {object} errors - Errors object
 * @returns {boolean} Has errors
 */
export const hasErrors = (errors) => {
  return Object.keys(errors).length > 0;
};

/**
 * Get first error message
 * @param {object} errors - Errors object
 * @returns {string} First error message
 */
export const getFirstError = (errors) => {
  const firstKey = Object.keys(errors)[0];
  return firstKey ? errors[firstKey] : '';
}; 