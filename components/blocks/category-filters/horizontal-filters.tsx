"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { useState } from "react";
import { Check, ChevronDown, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {mockCoverCategory} from "@/service/mock.cover-category";
import {CoverCategory} from "@/types/cover-category";
import {usePathname} from "next/navigation";
import {useTranslation} from "react-i18next";

// Modified base slider component to show end circle
interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showEndCircle?: boolean;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, showEndCircle = false, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    {showEndCircle && (
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    )}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;
// End Modified base slider component to show end circle

interface HorizontalFiltersProps {
  className?: string;
  onFilterChange?: (filters: FilterState) => void;
  filters: FilterState,
  setFilters?: React.Dispatch<React.SetStateAction<FilterState>>;
}

export interface FilterState {
  categories: string[];
  subCategories: string[];
  brands: string[];
  sortBy: string;
}

export default function HorizontalFilters({
  className,
  onFilterChange,
    filters,
    setFilters,
}: HorizontalFiltersProps) {

  const [currentCategory, setCurrentCategory] = useState<CoverCategory[]>([])
  const {t} = useTranslation();
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updated = { ...filters, ...newFilters };
    if (setFilters) {
      setFilters(updated);
    }

    // Count active filters
    let count = 0;
    if (updated.categories.length) count += updated.categories.length;
    if (updated.subCategories.length) count += updated.subCategories.length;
    if (updated.brands.length) count += updated.brands.length;
    setActiveFiltersCount(count);
    onFilterChange?.(updated);
  };

  const toggleFilter = (type: keyof FilterState, value: string) => {
    if (type === "sortBy") {
      updateFilters({ [type]: value } as Partial<FilterState>);
      return;
    }

    const currentValues = filters[type] as string[];
    const isRemoving = currentValues.includes(value);
    const newValues = isRemoving
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

    let updated: Partial<FilterState> = { [type]: newValues };

    if (type === "categories" && isRemoving) {
      const category = mockCoverCategory.find((c) => c.name === value);
      const subCategoriesToRemove = category?.category.map((x) => x.name) ?? [];

      updated.subCategories = filters.subCategories.filter(
          (sub) => !subCategoriesToRemove.includes(sub)
      );

      setCurrentCategory((prev) =>
          prev.filter((cat) => cat.name !== category?.name)
      );
    }

    updateFilters(updated);
  };
  const clearFilters = () => {
    if (setFilters) {
      setFilters({
        categories: [],
        subCategories: [],
        brands: [],
        sortBy: "featured",
      });
    }
    setActiveFiltersCount(0);
    setCurrentCategory([]);
    onFilterChange?.({
      categories: [],
      subCategories: [],
      brands: [],
      sortBy: "featured",
    });
  };


  const categories = mockCoverCategory.map(x => x.name)
  const subCategories: string[] = currentCategory
      ?.map(x => x.category.map(y => y.name))
      .flat() ?? [];
  const brands = ["ZDNB", "KARSILK", "AURANE", "SLIDER", "COLORTOUR"];


  const ActiveFilterBadges = () => {
    const activeFilters = [
      ...filters.categories.map((cat) => ({ type: "categories", value: cat })),
      ...filters.subCategories.map((subCat) => ({ type: "subCategories", value: subCat })),
      ...filters.brands.map((brand) => ({ type: "brands", value: brand })),
    ];

    if (activeFilters.length === 0) return null;

    console.log(pathname.includes("brand", 0))
    return (
      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {activeFilters.map((filter, index) => (
          <Badge
            key={`${filter.type}-${filter.value}-${index}`}
            variant="outline"
            className="flex items-center gap-1 px-2 py-1"
          >
            {filter.value}
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 p-0 ml-1"
              onClick={() =>
                {
                  toggleFilter(filter.type as keyof FilterState, filter.value)
                }
              }
            >
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        ))}
        {activeFilters.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="h-6 text-xs"
            onClick={clearFilters}
          >
            Clear all
          </Button>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Height set for example purpose only */}
      <div className={cn("w-full p-2 px-6", className)}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            {/* Category Filter */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8">
                  {t("product.filter.category")}
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-3">
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "justify-start w-full font-normal",
                          filters.categories.includes(category) && "font-medium"
                        )}
                        onClick={() => {
                          setCurrentCategory((prevState) => [...prevState, mockCoverCategory.filter(x => x.name == category)[0]])
                          toggleFilter("categories", category)
                        }}
                      >
                        <div className="flex items-center justify-between w-full">
                          {category}
                          {filters.categories.includes(category) && (
                            <Check className="h-4 w-4" />
                          )}
                        </div>
                      </Button>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Sub Category Filter */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8">
                  {t("product.filter.detail")}
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-3">
                <div className="space-y-2">
                  {subCategories.map((sub, index) => (
                      <div key={index} className="flex items-center">
                        <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                                "justify-start w-full font-normal",
                                filters.subCategories.includes(sub) && "font-medium"
                            )}
                            onClick={() => toggleFilter("subCategories", sub)}
                        >
                          <div className="flex items-center justify-between w-full">
                            {sub}
                            {filters.subCategories.includes(sub) && (
                                <Check className="h-4 w-4" />
                            )}
                          </div>
                        </Button>
                      </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>


            {/* Brand Filter */}
            {!pathname.includes("brand", 0) && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8">
                      {t("product.filter.brand")}
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-3">
                    <div className="space-y-2">
                      {brands.map((brand) => (
                          <div key={brand} className="flex items-center">
                            <Button
                                variant="ghost"
                                size="sm"
                                className={cn(
                                    "justify-start w-full font-normal",
                                    filters.brands.includes(brand) && "font-medium"
                                )}
                                onClick={() => toggleFilter("brands", brand)}
                            >
                              <div className="flex items-center justify-between w-full">
                                {brand}
                                {filters.brands.includes(brand) && (
                                    <Check className="h-4 w-4" />
                                )}
                              </div>
                            </Button>
                          </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>

            )}

            {/* Mobile All Filters Button */}
            <Button
              variant="outline"
              size="sm"
              className="h-8 sm:hidden"
              onClick={() => setShowMobileFilters(true)}
            >
              <Filter className="h-3 w-3 mr-1" />
              Tất cả Filters
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </div>

        </div>

        {/* Active Filter Badges */}
        <ActiveFilterBadges />

        {/* Mobile Filters Overlay */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowMobileFilters(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <ScrollArea className="h-[calc(100vh-8rem)]">
                <div className="space-y-6 pr-4">
                  {/* Categories */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">{t("product.filter.category")}</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "justify-start w-full font-normal",
                            filters.categories.includes(category) &&
                              "font-medium"
                          )}
                          onClick={() => toggleFilter("categories", category)}
                        >
                          <div className="flex items-center justify-between w-full">
                            {category}
                            {filters.categories.includes(category) && (
                              <Check className="h-4 w-4" />
                            )}
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/*Sub Category*/}
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">{t("product.filter.detail")}</h3>
                    <div className="space-y-2">
                      {subCategories.map((subCate) => (
                          <Button
                              key={subCate}
                              variant="ghost"
                              size="sm"
                              className={cn(
                                  "justify-start w-full font-normal",
                                  filters.subCategories.includes(subCate) &&
                                  "font-medium"
                              )}
                              onClick={() => toggleFilter("subCategories", subCate)}
                          >
                            <div className="flex items-center justify-between w-full">
                              {subCate}
                              {filters.subCategories.includes(subCate) && (
                                  <Check className="h-4 w-4" />
                              )}
                            </div>
                          </Button>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Brands */}
                  {!pathname.includes("brand") && (
                      <div>
                        <div className="space-y-3">
                          <h3 className="text-sm font-medium">{t("product.filter.brand")}</h3>
                          <div className="space-y-2">
                            {brands.map((brand) => (
                                <Button
                                    key={brand}
                                    variant="ghost"
                                    size="sm"
                                    className={cn(
                                        "justify-start w-full font-normal",
                                        filters.brands.includes(brand) && "font-medium"
                                    )}
                                    onClick={() => toggleFilter("brands", brand)}
                                >
                                  <div className="flex items-center justify-between w-full">
                                    {brand}
                                    {filters.brands.includes(brand) && (
                                        <Check className="h-4 w-4" />
                                    )}
                                  </div>
                                </Button>
                            ))}
                          </div>
                        </div>

                        <Separator />
                      </div>
                  )}

                </div>
              </ScrollArea>

              <div className="flex items-center justify-between mt-6 pt-4 border-t">
                <Button variant="outline" onClick={clearFilters}>
                  Xoá filter
                </Button>
                <Button onClick={() => setShowMobileFilters(false)}>
                  Thêm filters
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
