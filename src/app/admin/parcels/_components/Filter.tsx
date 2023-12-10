import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { Checkbox, Flex, Grid, Text } from "@radix-ui/themes";
import { HiChevronDown } from "react-icons/hi2";
import { PARCEL_STATUS } from "@/constants";
import usePageParams from "../_hooks/usePageParams";
import useCustomRouter from "@/app/_hooks/useCustomRouter";

const Filter = () => {
  return (
    <div className="bg-white rounded-xl px-4 py-6 w-[300px]">
      <div className="border-b pb-4 font-semibold mb-2">Filter</div>
      <Accordion.Root
        className="AccordionRoot"
        type="multiple"
        defaultValue={["status"]}
      >
        <StatusFilter />
      </Accordion.Root>
    </div>
  );
};

const StatusFilter = () => {
  const { status } = usePageParams();
  const { pushToggleFilter } = useCustomRouter();

  return (
    <Accordion.Item className="AccordionItem" value="status" data-state="open">
      <AccordionTrigger>Status</AccordionTrigger>
      <AccordionContent>
        <Grid rows="2" gap="2" display="inline-grid" flow="row">
          {Object.entries(PARCEL_STATUS).map(([key, value]) => (
            <Text key={key} as="label" size="2">
              <Flex gap="2">
                <Checkbox
                  name="status"
                  checked={status?.includes(key) ?? false}
                  color="green"
                  onCheckedChange={() => {
                    pushToggleFilter("/admin/parcels", "status", key);
                  }}
                />{" "}
                {value}
              </Flex>
            </Text>
          ))}
        </Grid>
      </AccordionContent>
    </Accordion.Item>
  );
};

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  {
    className?: string;
    children: React.ReactNode;
  }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames("AccordionTrigger", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <HiChevronDown className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: React.ReactNode;
  }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames("AccordionContent", className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";

export default Filter;
