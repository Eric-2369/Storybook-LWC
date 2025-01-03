import { api, LightningElement } from "lwc";

export default class DateRange extends LightningElement {
    @api required = false;
    @api disabled = false;
    @api startDateLabelName = "Start Date";
    @api endDateLabelName = "End Date";
    @api startDateHelpText = "";
    @api endDateHelpText = "";
    @api min = "";
    @api max = "";
    @api startDateValue = "";
    @api endDateValue = "";

    isShowCustomError = false;
    customErrorMessage = "The Start Date must not be greater than the End Date.";

    @api
    reportValidity() {
        if (this.startDateValue && this.endDateValue) {
            return this.startDateLessThanEndDateValidation(this.startDateValue, this.endDateValue);
        }
        const startDateElement = this.template.querySelector(".start-date");
        const endDateElement = this.template.querySelector(".end-date");
        if (!this.startDateValue) {
            startDateElement.setCustomValidity("complete this field.");
        }
        if (!this.endDateValue) {
            endDateElement.setCustomValidity("complete this field.");
        }

        let isStartDateValid = startDateElement.reportValidity();
        let isEndDateValid = endDateElement.reportValidity();
        return isStartDateValid && isEndDateValid;
    }

    handleDateChange(event) {
        const fieldName = event.target.dataset.type;
        const fieldValue = event.target.value;
        if (fieldName === "startDate") {
            this.handleDateChangeValidation("startDate", fieldValue);
        } else if (fieldName === "endDate") {
            this.handleDateChangeValidation("endDate", fieldValue);
        }
        this.dispatchEvent(new CustomEvent("datechange", { detail: { fieldName, fieldValue } }));
    }

    handleDateChangeValidation(fieldName, fieldValue) {
        const isChangingStartDate = fieldName === "startDate";
        const fieldClassName = isChangingStartDate ? ".start-date" : ".end-date";
        this.clearValidation(fieldClassName);

        const startDateValue = isChangingStartDate ? fieldValue : this.startDateValue;
        const endDateValue = isChangingStartDate ? this.endDateValue : fieldValue;
        if (startDateValue && endDateValue) {
            return this.startDateLessThanEndDateValidation(startDateValue, endDateValue);
        }
        const dateElement = this.template.querySelector(fieldClassName);
        if (isChangingStartDate && !startDateValue) {
            // If changing to empty
            dateElement.setCustomValidity("complete this field.");
            if (endDateValue) {
                // Reset end date if previous has "The Start Date must not be greater than the End Date." error
                this.template.querySelector(".end-date").reportValidity();
            }
        } else if (!isChangingStartDate && !endDateValue) {
            dateElement.setCustomValidity("complete this field.");
            if (startDateValue) {
                this.template.querySelector(".start-date").reportValidity();
            }
        }
        return dateElement.reportValidity();
    }

    clearValidation() {
        const startDateElement = this.template.querySelector(".start-date");
        const endDateElement = this.template.querySelector(".end-date");
        startDateElement.setCustomValidity("");
        endDateElement.setCustomValidity("");
        this.isShowCustomError = false;
        this.customErrorMessage = "";
    }

    startDateLessThanEndDateValidation(startDate, endDate) {
        const startDateElement = this.template.querySelector(".start-date");
        const endDateElement = this.template.querySelector(".end-date");
        if (startDate <= endDate) {
            return !!(startDateElement.reportValidity() & endDateElement.reportValidity());
        }
        startDateElement.setCustomValidity(" ");
        endDateElement.setCustomValidity(" ");
        startDateElement.reportValidity();
        endDateElement.reportValidity();
        this.isShowCustomError = true;
        this.customErrorMessage = "The Start Date must not be greater than the End Date.";
        return false;
    }

    @api setCustomValidity(startDateMsg, endDateMsg) {
        const startDateElement = this.template.querySelector(".start-date");
        const endDateElement = this.template.querySelector(".end-date");
        startDateElement.setCustomValidity(startDateMsg);
        endDateElement.setCustomValidity(endDateMsg);
    }
}
